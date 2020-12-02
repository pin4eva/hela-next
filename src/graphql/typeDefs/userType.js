import { gql } from "apollo-server-express";

export const UserType = gql`
	type User {
		_id: ID
		name: String
		phone: String
		email: String
		username: String
		password: String
		token: String
		role: String
		isActive: Boolean
		designation: String
		rank: Int
		points: Int
		contact: String
		status: String
		plan: String
		bio: String
		image: String
		verified: Boolean
		createdAt: Date
	}

	type Token {
		token: String
		user: User
	}

	extend type Query {
		# Users Query
		getUsers: [User]
		getUser(_id: ID!): User
		me(token: String): User
		auth: User
	}

	extend type Mutation {
		# User Mutations
		signup(input: SignupInput): User
		login(email: String, password: String): Token
		updateUser(input: SignupInput): User
		deleteUser(_id: ID): User
		verify(token: String): User
		forgotPassword(token: String, password: String): User
		changePassword(password: String!, oldPassword: String!): User
		checkEmail(email: String): User
	}

	input SignupInput {
		_id: ID
		name: String
		phone: String
		verified: Boolean
		email: String
		password: String
		token: String
		role: String
		isActive: Boolean
		designation: String
		rank: Int
		points: Int
		contact: String
		status: String
		plan: String
		bio: String
		image: String
		username: String
	}
`;
