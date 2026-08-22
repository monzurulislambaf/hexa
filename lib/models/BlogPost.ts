import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogPost extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  image?: string;
  published: boolean;
  authorId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String },
    category: { type: String, required: true },
    image: { type: String },
    published: { type: Boolean, default: false },
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
