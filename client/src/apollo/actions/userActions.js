import { GET_USER, AUTH, GET_AUTH } from "apollo/queries/userQuery";
import { initializeApollo } from "../index";
import jscookie from "js-cookie";
import { removeTokenCookie, TOKEN_NAME } from "utils/cookieUtils";
import User from "@/model/User";
import { connectDB } from "utils/db";

export const getUser = async (_id) => {
  const apollo = initializeApollo();
  const { data } = await await apollo.query({
    query: GET_USER,
    variables: { _id },
  });
  return data.getUser || {};
};

export const getProfile = async (username) => {
  await connectDB();
  try {
    let user = await User.findOne({ username }, { password: 0 });
    user = JSON.parse(JSON.stringify(user));
    return user;
  } catch (error) {
    console.log(error);
  }
};

// export const getAuth = async (token) => {
//   const apollo = await initializeApollo();
//   try {
//     const { data } = await apollo.query({
//       query: GET_AUTH,
//       variables: { token },
//     });
//     return data.me;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAuth = async (token) => {
  const apollo = await initializeApollo(null, token);
  try {
    const { data } = await apollo.query({
      query: AUTH,
    });
    return data.auth;
  } catch (error) {
    removeTokenCookie(TOKEN_NAME);
    console.log(error);
    if (error?.graphQLErrors) {
      removeTokenCookie(TOKEN_NAME);
    }

    return null;
  }
};
