import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    author_id: { type: Schema.Types.ObjectId, required: true, ref: "Author" },
    content: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [String],
    image: String,
    published_date: Date,
    last_updated: Date,
    is_trending: Boolean,
    is_recommended: Boolean,
    is_hero_article: Boolean,
    hero_position: Number,
    views_count: Number,
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
