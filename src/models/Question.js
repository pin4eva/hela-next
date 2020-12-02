const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    category: String,
    title: String,
    content: String,
    like: { type: Number, default: 0 },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    author: { type: Schema.Types.ObjectId, ref: "User" },
    slug: { type: String, slug: "title" },
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

const AnswerSchema = new Schema(
  {
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    vote: { type: Number, default: 0 },
    upVote: { type: Number, default: 0 },
    downVote: { type: Number, default: 0 },
    isCorrect: { type: Boolean, default: false },
    question: { type: Schema.Types.ObjectId, ref: "Question" },
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = { Question, Answer };
