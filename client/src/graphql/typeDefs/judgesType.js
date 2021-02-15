import { gql } from "apollo-server-micro";

export const JudgeType = gql`
  type Judge {
    _id: ID
    name: String
    bio: String
    state: String
    likes: Int
    slug: String
  }

  extend type Query {
    # Judge
    getJudges: [Judge]
    getJudge: Judge
  }

  extend type Mutation {
    # Judge
    addJudge(name: String, bio: String): Judge
    updateJudge(name: String, bio: String, state: String, _id: ID): Judge
    deleteJudge(_id: ID): Judge
  }
`;
