import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    name: String
    phone: String
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
  }

  type Token {
    token: String
    user: User
  }

  type NoteCat {
    _id: ID
    name: String!
    slug: String
    notes: [Note]
  }

  type Note {
    _id: ID
    topic: String
    category: String
    questions: [NoteQuestion]
    slug: String
  }

  type NoteQuestion {
    _id: ID
    note_id: ID
    question: String
    answer: String
    slug: String
  }

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
  }

  type RepComment {
    _id: ID
    author: User
    content: String!
    likes: Int
    approved: Boolean
    createdAt: Date
  }

  type Judge {
    _id: ID
    name: String
    bio: String
    state: String
    likes: Int
    slug: String
  }

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
    question: Question
  }

  type Query {
    # Report
    getReports: [Report]
    getReport(slug: String): Report
    # RepComment
    getRepComments: [RepComment]
    # Judge
    getJudges: [Judge]
    getJudge: Judge
    # Users Query
    getUsers: [User]
    getUser(_id: ID!): User
    me(token: String): User
    auth: User

    # Practice Note
    getNoteCats: [NoteCat]
    getNoteCat(slug: String): NoteCat
    getNoteQuestions: [NoteQuestion]
    getNotes: [Note]
    getNote(_id: ID): Note
    getNotesByCat(category: String): [Note]
    getNoteQuestionsByNoteId(note_id: ID): [NoteQuestion]

    # Question
    getQuestions: [Question]
    getQuestion(slug: String): Question
  }

  type Mutation {
    # Report
    addReport(input: ReportInput): Report
    updateReport(input: ReportInput): Report
    deleteReport(_id: ID): Report
    likeReport(_id: ID): Int

    # RepComment
    addRepComment(report: ID, content: String, author: ID): RepComment
    likeRepComment(_id: ID): RepComment
    deleteRepComment(_id: ID): RepComment

    # Judge
    addJudge(name: String, bio: String): Judge
    updateJudge(name: String, bio: String, state: String, _id: ID): Judge
    deleteJudge(_id: ID): Judge

    # User Mutations
    signup(input: SignupInput): User
    login(email: String, password: String): Token
    updateUser(input: SignupInput): User
    deleteUser(_id: ID): User
    verify(token: String): User
    forgotPassword(token: String, password: String): User
    changePassword(_id: ID, password: String): User
    checkEmail(email: String): User

    # Practice Note mutation
    createNote(topic: String!, category: String!): Note
    createNoteCat(name: String!): NoteCat
    createNoteQuestion(
      note_id: ID!
      question: String
      answer: String
    ): NoteQuestion
    deleteNoteCat(_id: ID): NoteCat
    deleteNoteQuestion(_id: ID): NoteQuestion
    deleteNote(_id: ID): Note
    updateNoteCat(_id: ID, name: String): NoteCat
    updateNoteQuestion(_id: ID, question: String, answer: String): NoteQuestion
    updateNote(_id: ID, topic: String, category: String): Note

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
  }

  input SignupInput {
    _id: ID
    name: String
    phone: String
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
  }
`;

export default typeDefs;
