import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import nodeMailer from "nodemailer";
import config from "../../config";
import { authentication } from "../../lib/auth";
import { RepComment } from "../../models/Report";
import User from "../../models/User";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://server.lawathenaeum.com"
    : "http://localhost:8000";

const randId = nanoid(5);

const transport = nodeMailer.createTransport({
  host: config.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: config.MAIL_ADDRESS,
    pass: config.MAIL_PASS,
  },
});

// const transport = nodeMailer.createTransport({
// 	// host: config.MAIL_HOST,
// 	// port: 465,
// 	// secure: true,
// 	service: "gmail",
// 	auth: {
// 		user: config.GMAIL_ADDRESS,
// 		pass: config.MAIL_PASS,
// 	},
// });
/**
 * TODO:
 *
 * 1. [*] Forgot password
 * 2. [*] Change password
 * 3. [*] Email confirmation
 * 4. [] User role and permission
 * 5. [] Upload profile picture
 * 6. [] Change email service
 */

export default {
  Query: {
    getUsers: async (_, args, { token }) => {
      await authentication(token);
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(error);
      }
    },
    getUser: async (_, { _id }, { token }) => {
      // await authentication(token);
      try {
        const user = await User.findOne({ _id });
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    me: async (_, { token }) => {
      // if (!token) return null;
      try {
        const data = await jwt.verify(token, config.SECRET);
        const user = await User.findOne({ _id: data._id }, { password: 0 });
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    auth: async (_, args, { token }) => {
      const user = await authentication(token);
      if (user) return user;
      else return null;
    },
  },
  Mutation: {
    signup: async (_, { input }) => {
      const { name, email, password, username } = input;
      if (!email || !name || !password) throw new Error("Fill all input");
      let user = await User.findOne({ email });
      // user = await User.findOne({ username });
      if (user)
        throw new Error("User with same email or username already exist");
      try {
        const info = {
          username,
          email,
          name,
          password: await bcrypt.hash(password, 10),
          token: nanoid(4),
        };
        const mailOptions = {
          from: "support@lawathenaeum.com",
          to: info.email,
          subject: "Please confirm your email",
          html: `<h2 align="center">Thank you for registering</h2> <p>Please <a href="${BASE_URL}/verify/${info.token}">verify</a> your account to gain access to our platform</p> <p> or</> <p style="text-align:center;"> copy your verification code <b >${info.token}</b></p>`,
        };
        const data = await sgMail.send(mailOptions);
        if (data) {
          user = await User.create(info);
        }

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    login: async (_, { email, password }, { res }) => {
      if (!email || !password) throw new Error("Fill the email and password");
      let user = await User.findOne({ email });
      if (!user) throw new Error("No record found");
      let isMatch = await bcrypt.compareSync(password, user.password);
      if (!isMatch) throw Error("Incorrect password");
      let payload = {
        _id: user._id,
      };
      try {
        const token = await jwt.sign(payload, config.SECRET, {
          expiresIn: "1d",
        });

        res.cookie("token", token, {
          expires: new Date(Date.now() + 8 * 360000),
          httpOnly: process.env.NODE_ENV === " production ",
          secure: process.env.NODE_ENV === " production ",
        });

        return { user, token };
      } catch (error) {
        throw new Error(error);
      }
    },
    verify: async (_, { token }) => {
      let user = await User.findOne({ token });
      if (!user) {
        throw new Error("Invalid token");
      }
      try {
        user = await User.findOneAndUpdate(
          { token },
          { $set: { token: "" } },
          { new: true }
        );
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    checkEmail: async (_, { email }) => {
      let user = await User.findOne({ email });
      if (!user) throw new Error("Unknown email");
      try {
        user = await User.findOneAndUpdate(
          { _id: user._id },
          { $set: { token: crypto.randomBytes(64).toString("hex") } },
          { new: true }
        );
        const mailOptions = {
          from: config.AUTH_USER,
          to: user.email,
          subject: "Password recovery mail",
          html: `<div align="center"><h2 align="center">Password Recovery</h2> <p>Please <a href="${BASE_URL}/verify?token=${randId}&ref=${user.token}&type=changepass">follow the link to update your password</> </p></div>`,
        };
        await transport.sendMail(mailOptions);
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    forgotPassword: async (_, { token, password }) => {
      let user = await User.findOne({ token });
      if (!user) throw new Error("Invalid or expired token");
      try {
        user = await User.findOneAndUpdate(
          { token },
          {
            token: "",
            password: bcrypt.hashSync(password, 10),
          },
          { new: true }
        );

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    changePassword: async (_, { password, oldPassword }, { token }) => {
      let user = await authentication(token);

      user = await User.findOne({ _id: user._id });

      const isMatch = await bcrypt.compareSync(oldPassword, user.password);
      if (!isMatch) throw Error("Incorrect password");

      try {
        user = await User.findOneAndUpdate(
          { _id: user._id },
          {
            password: bcrypt.hashSync(password, 10),
          },
          { new: true }
        );

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },

    deleteUser: async (_, { _id }, { token }) => {
      const user = await authentication(token);
      if (user.role !== "admin")
        throw Error("You are not authorized to delete a user");
      try {
        let user = await User.findOne({ _id });
        if (!user) throw new Error("No record found");

        await RepComment.deleteMany({ author: user._id });

        user.remove();
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateUser: async (_, { input }, { token }) => {
      await authentication(token);
      try {
        let user = await User.findOneAndUpdate(
          { _id: input._id },
          {
            ...input,
          },
          {
            new: true,
          }
        );
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
