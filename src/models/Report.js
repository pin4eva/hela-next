import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {
    court: String,
    suit_no: String,
    title: String,
    summary: String,
    body: String,
    date: Date,
    vol: String,
    year: String,
    likes: { type: Number, default: 0 },
    caseRef: String,
    slug: { type: String, slug: "title" },
    comments: [{ type: Schema.Types.ObjectId, ref: "RepComment" }],
    judgesList: [{ type: Schema.Types.ObjectId, ref: "Judge" }],
    added_by: { type: Schema.Types.ObjectId, ref: "User" },
    updated_by: { type: Schema.Types.ObjectId, ref: "User" },

    // deleted_by: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

ReportSchema.plugin(slug);

const RepCommentSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  report: { type: Schema.Types.ObjectId, ref: "Report" },
});

export const Report =
  mongoose.models.Report || mongoose.model("Report", ReportSchema);
export const RepComment =
  mongoose.models.RepComment || mongoose.model("RepComment", RepCommentSchema);

// module.exports = {
//   Report,
//   RepComment,
// };
