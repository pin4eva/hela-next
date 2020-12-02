const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const ReportSchema = new Schema(
  {
    court: String,
    suit_no: String,
    title: String,
    appellant: String,
    respondent: String,
    c_appellant: String,
    c_respondent: String,
    appeal: String,
    issues_of_law: String,
    summary: String,
    determination: String,
    date: String,
    judges: String,
    vol: String,
    year: String,
    ratios: String,
    cases_cited: String,
    books_cited: String,
    judgement: String,
    likes: { type: Number, default: 0 },
    caseRef: String,
    slug: { type: String, slug: "title" },
    // createdAt: { type: Date, default: Date.now },
    comments: [{ type: Schema.Types.ObjectId, ref: "RepComment" }],
    judgesList: [{ type: Schema.Types.ObjectId, ref: "Judge" }],
    added_by: { type: Schema.Types.ObjectId, ref: "User" },
    updated_by: { type: Schema.Types.ObjectId, ref: "User" },
    parties: { type: String, default: "" },
    // deleted_by: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const RepCommentSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  report: { type: Schema.Types.ObjectId, ref: "Report" },
});

const Report = mongoose.model("Report", ReportSchema);
const RepComment = mongoose.model("RepComment", RepCommentSchema);

module.exports = {
  Report,
  RepComment,
};
