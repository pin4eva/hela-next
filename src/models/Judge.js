const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

const JudgeSchema = new Schema({
  name: String,
  image: String,
  bio: String,
  state: String,
  slug: { type: String, slug: "name" },
  likes: { type: Number, default: 0 },
  reports: [{ type: Schema.Types.ObjectId, ref: "Report" }],
});

JudgeSchema.plugin(slug);

export default mongoose.models.Judge || mongoose.model("Judge", JudgeSchema);
