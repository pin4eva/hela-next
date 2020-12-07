import reports from "./reportsResolver";
import judges from "./judgesResolvers";
import users from "./userResolver";
import notes from "../resolvers/noteResolvers";
import Question from "../resolvers/questionResolvers";
import { dateScalar } from "./scalarType";

// module.exports = {
//   Query: {
//     ...judges.Query,
//     ...reports.Query,
//     ...users.Query,
//   },
//   Mutation: {
//     ...reports.Mutation,
//     ...judges.Mutation,
//     ...users.Mutation,
//   },
//   Date: dateScalar,
// }

const resolvers = {
  Query: {
    ...judges.Query,
    ...reports.Query,
    ...users.Query,
    ...notes.Query,
    ...Question.Query,
  },
  Mutation: {
    ...reports.Mutation,
    ...judges.Mutation,
    ...users.Mutation,
    ...notes.Mutation,
    ...Question.Mutation,
  },
  Date: dateScalar,
};

export default resolvers;
