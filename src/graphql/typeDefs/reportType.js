import { gql } from "apollo-server-express";

export const ReportTypes = gql`
  type Report {
    _id: ID
    court: String
    suit_no: String
    title: String
    appellant: String
    respondent: String
    c_appellant: String
    c_respondent: String
    appeal: String
    issues_of_law: String
    summary: String
    determination: String
    date: String
    judges: String
    vol: String
    year: String
    ratios: String
    cases_cited: String
    books_cited: String
    judgement: String
    likes: Int
    caseRef: String
    slug: String
    createdAt: Date
    comments: [RepComment]
    added_by: User
    updated_by: User
    parties: String
  }

  type RepComment {
    _id: ID
    author: User
    content: String!
    likes: Int
    approved: Boolean
    createdAt: Date
    report: Report
  }

  input ReportInput {
    _id: ID
    court: String
    suit_no: String
    title: String
    appellant: String
    respondent: String
    c_appellant: String
    c_respondent: String
    appeal: String
    issues_of_law: String
    summary: String
    determination: String
    date: String
    judges: String
    vol: String
    year: String
    ratios: String
    cases_cited: String
    books_cited: String
    judgement: String
    likes: Int
    caseRef: String
    slug: String
    createdAt: Date
    parties: String
  }
  extend type Query {
    # Report
    getReports: [Report]
    getLimitedReports(skip: Int, limit: Int): [Report]
    getReport(slug: String): Report
    getMyReports(skip: Int, limit: Int): [Report]
    # RepComment
    getRepComments: [RepComment]
    getRepCommentsByReport(report: ID): [RepComment]
  }

  extend type Mutation {
    # Report
    addReport(input: ReportInput): Report
    updateReport(input: ReportInput): Report
    deleteReport(_id: ID): Report
    likeReport(_id: ID): Int

    # RepComment
    addRepComment(report: ID, content: String, author: ID): RepComment
    likeRepComment(_id: ID): RepComment
    deleteRepComment(_id: ID): RepComment
  }
`;
