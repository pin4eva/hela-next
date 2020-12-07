import { gql } from "apollo-server-micro";

export const NoteTypes = gql`
  type NoteCat {
    _id: ID
    name: String
    slug: String
    notes: [Note]
  }

  type Note {
    _id: ID
    topic: String
    category: String
    questions: [NoteQuestion]
    slug: String
    cat_slug: String
  }

  type NoteQuestion {
    _id: ID
    note_id: ID
    question: String
    answer: String
    slug: String
  }

  extend type Query {
    # Practice Note
    getNoteCats: [NoteCat]
    getNoteCat(slug: String): NoteCat
    getNoteQuestions: [NoteQuestion]
    getNotes: [Note]
    getNote(slug: String): Note
    getNotesByCat(category: String): [Note]
    getNoteQuestionsByNoteId(note_id: ID): [NoteQuestion]
  }

  extend type Mutation {
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
  }
`;
