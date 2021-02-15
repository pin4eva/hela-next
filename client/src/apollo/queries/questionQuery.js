const { default: gql } = require("graphql-tag");

export const QuestionFragment = gql`
  fragment QuestionFragment on Question {
    _id
    title
    createdAt
    category
    slug
    author {
      name
      _id
      image
    }
    content
    answers {
      _id
      content
      vote
      createdAt
      author {
        name
        _id
        image
      }
    }
  }
`;

export const GET_QUESTIONS_BY_USER = gql`
  query GetQuestionsByUser($_id: ID) {
    getQuestionsByUser(_id: $_id) {
      _id
      title
      createdAt
    }
  }
`;

export const GET_QUESTIONS = gql`
  {
    getQuestions {
      ...QuestionFragment
    }
  }
  ${QuestionFragment}
`;

export const GET_QUESTION = gql`
  query GetQuestion($slug: String) {
    getQuestion(slug: $slug) {
      ...QuestionFragment
    }
  }
  ${QuestionFragment}
`;

export const NEW_QUESTION = gql`
  mutation NewQuestion(
    $author: ID
    $content: String
    $category: String
    $title: String
  ) {
    newQuestion(
      author: $author
      content: $content
      category: $category
      title: $title
    ) {
      _id
      title
      category
      content
      createdAt
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($author: ID, $content: String) {
    updateQuestion(author: $author, content: $content) {
      _id
      title
      category
      content
      createdAt
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($_id: ID) {
    deleteQuestion(_id: $_id) {
      _id
      title
    }
  }
`;

// Answers

export const NEW_ANSWER = gql`
  mutation NewAnswer($question: ID, $author: ID, $content: String) {
    newAnswer(question: $question, author: $author, content: $content) {
      author {
        name
        _id
        image
      }
      content
      _id
    }
  }
`;

export const DELETE_ANSWER = gql`
  mutation DeleteAnswer($_id: ID) {
    deleteAnswer(_id: $_id) {
      _id
    }
  }
`;

export const UPVOTE = gql`
  mutation($_id: ID) {
    upVote(_id: $_id) {
      _id
      vote
    }
  }
`;
export const DOWNVOTE = gql`
  mutation($_id: ID) {
    downVote(_id: $_id) {
      _id
      vote
    }
  }
`;
