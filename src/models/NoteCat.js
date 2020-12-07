import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
const Schema = mongoose.Schema;

const NoteCatSchema = new Schema({
  name: String,
  slug: { type: String, slug: "name" },
});

NoteCatSchema.plugin(slug);
export default mongoose.models.NoteCat ||
  mongoose.model("NoteCat", NoteCatSchema);
