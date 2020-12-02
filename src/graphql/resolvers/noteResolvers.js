import Note from "../../models/Pnote";
import NoteCat from "../../models/NoteCat";
import NoteQuestion from "../../models/NoteQuestion";
import { authentication } from "../../lib/auth";

export default {
  Query: {
    getNoteCats: async () => {
      try {
        const noteCats = await NoteCat.find();
        return noteCats;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNoteCat: async (_, { slug }) => {
      try {
        const noteCat = await NoteCat.findOne({ slug });
        const notes = await Note.find({ category: noteCat._id });
        const data = {
          ...noteCat._doc,
          notes,
        };
        // console.log(data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNoteQuestions: async () => {
      try {
        const questions = await NoteQuestion.find();
        return questions;
      } catch (error) {
        throw new Error(error);
      }
    },

    getNotes: async () => {
      try {
        let notes = await Note.find();
        notes = notes.map((note) => {
          return {
            ...note._doc,
            questions: NoteQuestion.find({ note_id: note._id }),
          };
        });

        return notes;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNote: async (_, { slug }) => {
      try {
        const note = await Note.findOne({ slug }).populate("questions");
        // const questions = await NoteQuestion.find({ topic: note._id });
        return note;
      } catch (error) {
        throw new Error(error);
      }
    },

    getNotesByCat: async (_, { category }) => {
      try {
        let notes = await Note.find({ cat_slug: category });
        notes = notes.map((note) => {
          return {
            ...note._doc,
            questions: NoteQuestion.find({ note_id: note._id }),
          };
        });
        return notes;
      } catch (error) {
        throw new Error(error);
      }
    },
    getNoteQuestionsByNoteId: async (_, { note_id }) => {
      try {
        const questions = await NoteQuestion.find({ note_id });
        return questions;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createNote: async (_, args, { token }) => {
      await authentication(token);

      try {
        const note = await Note.create({ ...args });
        return note;
      } catch (error) {
        throw new Error(error);
      }
    },
    createNoteCat: async (_, { name }, { token }) => {
      await authentication(token);
      try {
        const notecat = await NoteCat.create({ name });
        return notecat;
      } catch (error) {
        throw new Error(error);
      }
    },
    createNoteQuestion: async (_, args, { token }) => {
      await authentication(token);
      let { note_id } = args;
      note_id = await Note.findOne({ _id: note_id });
      if (!note_id) throw new Error("Invalid note ID");
      try {
        const question = await NoteQuestion.create({ ...args });
        return question;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateNote: async (_, args, { token }) => {
      await authentication(token);
      try {
        const note = await Note.findOneAndUpdate({ _id: args._id }, args, {
          new: true,
        });
        return note;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateNoteCat: async (_, { _id, name }, { token }) => {
      await authentication(token);
      try {
        const cat = await NoteCat.findOneAndUpdate(
          { _id },
          { $set: { name } },
          { new: true }
        );
        return cat;
      } catch (error) {
        throw new Error(error);
      }
    },
    updateNoteQuestion: async (_, args, { token }) => {
      await authentication(token);
      try {
        const question = await NoteQuestion.findByIdAndUpdate(
          args._id,
          { ...args },
          { new: true }
        );
        return question;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteNote: async (_, { _id }, { token }) => {
      await authentication(token);
      try {
        const note = await Note.findOne({ _id });
        if (!note) throw Error("No record found");
        await NoteQuestion.deleteMany({ topic: note._id });
        note.remove();
        return note;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteNoteCat: async (_, { _id }, { token }) => {
      await authentication(token);
      try {
        const cat = await NoteCat.findById(_id);
        const notes = await Note.find({ category: cat._id });
        if (notes.length >= 1)
          throw Error(
            "There are notes that depends on this category. delete the notes first and try again"
          );
        cat.remove();
        return cat;
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteNoteQuestion: async (_, { _id }, { token }) => {
      await authentication(token);
      try {
        const question = await NoteQuestion.findOne({ _id });
        question.remove();
        return question;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
