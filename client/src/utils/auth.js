import config from "utils/config.js";
import jwt from "jsonwebtoken";
import User from "@/model/User";

export const authentication = async (token) => {
  if (!token) {
    throw new Error("No token provided");
  } else {
    const data = await jwt.verify(token, config.SECRET);
    if (data) {
      const user = await User.findOne({ _id: data._id }, { password: 0 });
      return user;
    } else {
      throw new Error("Invalid token");
    }
  }
};
