import { gql } from "apollo-server-micro";

export const ReportTypes = gql`
  type Report {
    _id: ID
    court: String
    title: String
    summary: String
    year: String
    date: Date
    vol: String
    body: String
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

    title: String

    summary: String
    year: String
    date: Date

    vol: String
    body: String
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
    searchReport(query: String): [Report]

    # RepComment
    addRepComment(report: ID, content: String, author: ID): RepComment
    likeRepComment(_id: ID): RepComment
    deleteRepComment(_id: ID): RepComment
  }
`;
