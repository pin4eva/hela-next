import { Question, Answer } from "models/Question";

export default {
  Query: {
    getQuestions: async () => {
      try {
        let questions = await Question.find().populate("author answers");
        questions = questions.map((question) => {
          const answers = Answer.find({ question: question._id });
          return {
            ...question._doc,
            answers,
          };
        });
        return questions;
      } catch (error) {
        throw Error(error);
      }
    },
    getQuestion: async (_, { slug }) => {
      try {
        let question = await Question.findOne({ slug }).populate(
          "author answers"
        );
        const answers = await Answer.find({ question: question._id }).populate(
          "author"
        );
        return {
          ...question._doc,
          answers,
        };
      } catch (error) {
        throw Error(error);
      }
    },
    getQuestionsByUser: async (_, { _id }) => {
      try {
        let questions = await Question.find({ author: _id });
        return questions;
      } catch (error) {
        throw new Error(error);
      }
    },
    getAnswersByUser: async (_, { _id }) => {
      try {
        const answers = await Answer.find({ author: _id });
        return answers;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    newQuestion: async (_, { author, content, category, title }) => {
      try {
        const question = await Question.create({
          author,
          content,
          category,
          title,
        });
        return question;
      } catch (err) {
        throw Error(err);
      }
    },
    updateQuestion: async (_, { _id, content, title }) => {
      try {
        const question = await Question.findByIdAndUpdate(
          _id,
          { content, title },
          { new: true }
        );
        return question;
      } catch (error) {
        throw Error(error);
      }
    },
    deleteQuestion: async (_, { _id }) => {
      try {
        const question = await Question.findOne({ _id });
        if (question) question.remove();
        return question;
      } catch (error) {
        throw Error(error);
      }
    },
    newAnswer: async (_, { content, author, question }) => {
      try {
        let answer = await Answer.create({ content, author, question });
        answer = await Answer.findOne({ _id: answer._id }).populate("author");
        return answer;
      } catch (error) {
        throw Error(error);
      }
    },
    updateAnswer: async (_, { content, _id }) => {
      try {
        const answer = await Answer.findOneAndUpdate(
          { _id },
          { content },
          { new: true }
        );
        return answer;
      } catch (error) {
        throw Error(error);
      }
    },
    deleteAnswer: async (_, { _id }) => {
      try {
        const answer = await Answer.findByIdAndRemove(_id);
        return answer;
      } catch (error) {
        throw Error(error);
      }
    },
    upVote: async (_, { _id }) => {
      try {
        const answer = await Answer.findOneAndUpdate(
          { _id },
          { $inc: { vote: 1 } },
          { new: true }
        );
        return answer;
      } catch (error) {
        throw Error(error);
      }
    },
    downVote: async (_, { _id }) => {
      try {
        const answer = await Answer.findOneAndUpdate(
          { _id },
          { $inc: { vote: -1 } },
          { new: true }
        );
        return answer;
      } catch (error) {
        throw Error(error);
      }
    },
  },
};
