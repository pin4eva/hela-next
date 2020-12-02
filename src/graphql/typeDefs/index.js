import { makeExecutableSchema, gql } from "apollo-server-express";
import { UserType } from "./userType";
import { NoteTypes } from "./noteTypes";
import { ReportTypes } from "./reportType";
import { QuestionType } from "./questionType";
import { JudgeType } from "../typeDefs/judgesType";
import resolvers from "../resolvers";

const typeDefs = gql`
  scalar Date
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    UserType,
    ReportTypes,
    NoteTypes,
    QuestionType,
    JudgeType,
  ],
  resolvers,
});
