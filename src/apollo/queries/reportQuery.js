import gql from "graphql-tag";

export const ReportFragment = gql`
  fragment ReportFragment on Report {
    _id
    court
    suit_no
    title
    appellant
    respondent
    c_appellant
    c_respondent
    appeal
    issues_of_law
    summary
    determination
    date
    judges
    vol
    year
    ratios
    cases_cited
    books_cited
    judgement
    likes
    caseRef
    slug
    createdAt
    comments {
      _id
    }
    added_by {
      _id
      name
    }
  }
`;

export const GET_REPORTS_QUERY = gql`
  {
    getReports {
      ...ReportFragment
    }
  }
  ${ReportFragment}
`;

export const GET_REPORT_QUERY = gql`
  query GetReport($slug: String) {
    getReport(slug: $slug) {
      ...ReportFragment
    }
  }
  ${ReportFragment}
`;

// Mutation

export const ADD_REPORT_MUTATION = gql`
  mutation addReport($input: ReportInput) {
    addReport(input: $input) {
      ...ReportFragment
    }
  }
  ${ReportFragment}
`;

export const UPDATE_REPORT_MUTATION = gql`
  mutation UpdateReport($input: ReportInput) {
    updateReport(input: $input) {
      ...ReportFragment
    }
  }
  ${ReportFragment}
`;

export const LIKE_REPORT_MUTATION = gql`
  mutation LikeReport($_id: ID) {
    likeReport(_id: $_id)
  }
`;

export const DELETE_REPORT_MUTATION = gql`
  mutation deleteReport($_id: ID) {
    deleteReport(_id: $_id) {
      _id
    }
  }
`;

export const ADD_REPCOMMENT_MUTATION = gql`
  mutation AddRepComment($report: ID, $author: ID, $content: String) {
    addRepComment(report: $report, author: $author, content: $content) {
      _id
      content
      createdAt
      author {
        _id
        name
      }
    }
  }
`;
export const DELETE_REPCOMMENT_MUTATION = gql`
  mutation DeleteRepComment($_id: ID) {
    deleteRepComment(_id: $_id) {
      _id
    }
  }
`;

export const GET_REPCOMMENTS_BY_REPORT = gql`
  query GetRepcommentsByReport($report: ID) {
    getRepCommentsByReport(report: $report) {
      _id
      content
      likes
      createdAt
      author {
        image
        name
        _id
      }
    }
  }
`;

export const GET_LIMITED_REPORTS = gql`
  query($skip: Int, $limit: Int) {
    getLimitedReports(skip: $skip, limit: $limit) {
      _id
      title
      vol
      added_by {
        _id
        name
      }
    }
  }
`;

export const GET_MY_REPORTS = gql`
  query($skip: Int, $limit: Int) {
    getMyReports(skip: $skip, limit: $limit) {
      vol
      title
      _id
      slug
      added_by {
        _id
        name
      }
    }
  }
`;
