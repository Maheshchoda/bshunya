import mongoose from "mongoose";
import ImageSchema from "./image.model";
const { Schema } = mongoose;

const ContentChildSchema = new Schema(
  {
    type: String,
    tag: String,
    children: [
      {
        type: String,
        text: String,
      },
    ],
    listType: String,
    value: {
      id: String,
      alt: String,
      filename: String,
      mimeType: String,
      filesize: Number,
      width: Number,
      height: Number,
      createdAt: Date,
      updatedAt: Date,
      url: String,
      caption: [
        {
          children: [
            {
              text: String,
            },
          ],
        },
      ],
    },
  },
  { _id: false }
);

const ContentSchema = new Schema(
  {
    root: {
      type: String,
      children: [ContentChildSchema],
      direction: String,
    },
  },
  { _id: false }
);

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    authorId: { type: Schema.Types.ObjectId, required: true, ref: "Author" },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [String],
    image: ImageSchema,
    content: ContentSchema,
    isHeroArticle: { type: Boolean, default: false },
    viewsCount: { type: Number, default: 0 },
    meta: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: ImageSchema,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

export const Article = mongoose.model("Article", ArticleSchema);
