import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
const Schema = mongoose.Schema;

const NoteQuestionSchema = new Schema({
  note_id: { type: Schema.Types.ObjectId, ref: "Note" },
  question: String,
  answer: String,
  slug: { type: String, slug: "question" },
});

NoteQuestionSchema.plugin(slug);
export default mongoose.models.NoteQuestion ||
  mongoose.model("NoteQuestion", NoteQuestionSchema);
