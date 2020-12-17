import gql from "graphql-tag";

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    name
    phone
    email
    role
    isActive

    rank
    points
    contact
    status
    plan
    bio
    image
  }
`;

export const GET_USERS = gql`
  query {
    getUsers {
      _id
      name
      email
      phone
      role
    }
  }
`;

export const GET_USER = gql`
  query GetUser($_id: ID!) {
    getUser(_id: $_id) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const GET_JUDGE_QUERY = gql`
  query {
    getJudges {
      name
      bio
      _id
    }
  }
`;

export const GET_AUTH = gql`
  query($token: String) {
    me(token: $token) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const AUTH = gql`
  {
    auth {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        role
        isActive
        image
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup($input: SignupInput) {
    signup(input: $input) {
      _id
      name
      email
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($input: SignupInput) {
    updateUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const VERIFY_USER_MUTATION = gql`
  mutation VerifyUser($token: String) {
    verify(token: $token) {
      _id
      name
    }
  }
`;

export const CHECK_EMAIL_MUTATION = gql`
  mutation CheckEmail($email: String) {
    checkEmail(email: $email) {
      name
      _id
    }
  }
`;
export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($token: String, $password: String) {
    forgotPassword(token: $token, password: $password) {
      name
      _id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($_id: ID) {
    deleteUser(_id: $_id) {
      _id
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($password: String!, $oldPassword: String!) {
    changePassword(password: $password, oldPassword: $oldPassword) {
      name
    }
  }
`;

export const UPLOAD_USER_IMAGE = gql`
  mutation($image: String, $_id: ID) {
    uploadImage(_id: $_id, image: $image) {
      _id
      image
    }
  }
`;
