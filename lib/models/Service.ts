import mongoose, { Schema, Document, Model } from "mongoose";

export interface IService extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  features: string[];
  benefits: string[];
  icon?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    features: [{ type: String }],
    benefits: [{ type: String }],
    icon: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Service: Model<IService> =
  mongoose.models.Service ||
  mongoose.model<IService>("Service", ServiceSchema);
