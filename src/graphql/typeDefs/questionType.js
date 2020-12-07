import { gql } from "apollo-server-micro";

export const QuestionType = gql`
  type Question {
    _id: ID
    title: String
    category: String
    content: String
    like: Int
    answers: [Answer]
    author: User
    slug: String
    createdAt: Date
    updatedAt: Date
  }

  type Answer {
    _id: ID
    content: String
    author: User
    upVote: Int
    downVote: Int
    vote: Int
    question: Question
    createdAt: Date
  }

  extend type Query {
    # Question
    getQuestions: [Question]
    getQuestion(slug: String): Question
    getQuestionsByUser(_id: ID): [Question]
    getAnswersByUser(_id: ID): [Answer]
  }

  extend type Mutation {
    # Question
    newQuestion(
      author: ID
      content: String
      category: String
      title: String
    ): Question
    deleteQuestion(_id: ID): Question
    updateQuestion(content: String, _id: String, title: String): Question
    like(_id: ID): Question

    # Answer
    newAnswer(author: ID, content: String, question: ID): Answer
    updateAnswer(content: String, _id: String): Answer
    deleteAnswer(_id: ID): Answer
    upVote(_id: ID): Answer
    downVote(_id: ID): Answer
  }
`;
