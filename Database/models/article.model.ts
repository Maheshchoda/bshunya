import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: "Author" },
    content: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [String],
    image: String,
    publishedOn: Date,
    lastUpdated: Date,
    isTrending: Boolean,
    isRecommended: Boolean,
    isHeroArticle: Boolean,
    heroPosition: Number,
    viewsCount: Number,
    _status: String,
    meta: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
