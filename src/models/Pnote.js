import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    category: String,
    topic: String,
    questions: [{ type: Schema.Types.ObjectId, ref: "NoteQuestion" }],
    slug: { type: String, slug: "topic" },
    cat_slug: { type: String, slug: "category" },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    getters: true,
  }
);

// NoteSchema.virtual("contents", {
//   ref: "NoteQuestion",
//   localField: "questions",
//   foreignField: "topic",
// });

NoteSchema.post("findOne", async function (doc) {
  const questions = await mongoose
    .model("NoteQuestion")
    .find({ note_id: doc._id });
  doc.questions = questions;
});

NoteSchema.plugin(slug);

// let Note;

// try {
//   Note = mongoose.model("Note", NoteSchema);
// } catch (error) {
//   Note = mongoose.model("Note");
// }

export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
