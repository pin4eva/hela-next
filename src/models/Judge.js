const mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")
const Schema = mongoose.Schema
mongoose.plugin(slug)

const JudgeSchema = new Schema({
  name: String,
  image: String,
  bio: String,
  state: String,
  slug: { type: String, slug: "name" },
  likes: { type: Number, default: 0 },
  reports: [{ type: Schema.Types.ObjectId, ref: "Report" }],
})

module.exports = mongoose.model("Judge", JudgeSchema)
