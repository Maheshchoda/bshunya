import mongoose from "mongoose";
const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
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
  { _id: false }
);

export default ImageSchema;
