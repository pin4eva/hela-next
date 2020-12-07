import gql from "graphql-tag";

export const GETNOTECATS_QUERY = gql`
  {
    getNoteCats {
      _id
      name
      slug
    }
  }
`;

export const GETNOTES_QUERY = gql`
  {
    getNotes {
      _id
      topic
      slug
      questions {
        _id
        question
        answer
      }
    }
  }
`;

export const GETNOTE_QUERY = gql`
  query GetNote($slug: String) {
    getNote(slug: $slug) {
      _id
      topic
      slug
      category
      questions {
        _id
        question
        answer
      }
    }
  }
`;

export const GET_NOTES_BY_CAT = gql`
  query GetNoteByCat($category: String) {
    getNotesByCat(category: $category) {
      _id
      topic
      slug
      category
      questions {
        question
        answer
      }
    }
  }
`;

export const GET_NOTE_CAT = gql`
  query GetNoteCat($slug: String) {
    getNoteCat(slug: $slug) {
      _id
      name
      notes {
        _id
        slug
        topic
      }
    }
  }
`;

export const GET_NOTE_QUESTIONS = gql`
  {
    getNoteQuestions {
      _id
      note_id
      question
      answer
    }
  }
`;

export const CREATENOTECAT_MUTATION = gql`
  mutation CreateNoteCat($name: String!) {
    createNoteCat(name: $name) {
      _id
      name
    }
  }
`;

export const CREATE_NOTE_MUTATION = gql`
  mutation CreateNote($topic: String!, $category: String!) {
    createNote(topic: $topic, category: $category) {
      _id
      topic
      slug
    }
  }
`;

export const CREATE_NOTE_QUESTION_MUTATION = gql`
  mutation CreateNoteQuestion(
    $note_id: ID!
    $question: String
    $answer: String
  ) {
    createNoteQuestion(
      note_id: $note_id
      question: $question
      answer: $answer
    ) {
      _id
      question
      answer
    }
  }
`;

export const ADD_NOTE_QUESTION = gql`
  mutation CreateNoteQuestion(
    $note_id: ID!
    $question: String
    $answer: String
  ) {
    createNoteQuestion(
      note_id: $note_id
      question: $question
      answer: $answer
    ) {
      question
      answer
    }
  }
`;

export const DELETE_NOTE_QUESTION = gql`
  mutation DeleteNoteQuestion($_id: ID) {
    deleteNoteQuestion(_id: $_id) {
      _id
      question
    }
  }
`;

export const UPDATE_NOTE_QUESTION = gql`
  mutation UpdateNoteQuestion($_id: ID, $question: String, $answer: String) {
    updateNoteQuestion(_id: $_id, question: $question, answer: $answer) {
      _id
      question
      answer
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($_id: ID) {
    deleteNote(_id: $_id) {
      topic
      _id
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($_id: ID, $topic: String) {
    updateNote(_id: $_id, topic: $topic) {
      topic
      category
      _id
    }
  }
`;
