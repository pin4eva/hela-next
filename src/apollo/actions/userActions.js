import { GET_USER, AUTH, GET_AUTH } from "apollo/queries/userQuery";
import { initializeApollo } from "../index";
import jscookie from "js-cookie";

export const getUser = async (_id) => {
  const apollo = initializeApollo();
  const { data } = await await apollo.query({
    query: GET_USER,
    variables: { _id },
  });
  return data.getUser || {};
};

export const getAuth = async (token) => {
  const apollo = await initializeApollo();
  try {
    const { data } = await apollo.query({
      query: GET_AUTH,
      variables: { token },
    });
    return data.me;
  } catch (error) {
    console.log(error);
  }
};

// export const getAuth = async (token) => {
//   const apollo = await initializeApollo(token);
//   try {
//     const { data } = await apollo.query({
//       query: AUTH,
//     });
//     return data.auth;
//   } catch (error) {
//     jscookie.remove("token");
//     console.log(error);
//     if (error?.graphQLErrors) {
//       jscookie.remove("token");
//     }

//     return null;
//   }
// };
