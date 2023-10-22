import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true, index: true },
    bio: String,
    profile_image: String,
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
