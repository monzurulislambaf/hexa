import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICertificate extends Document {
  _id: mongoose.Types.ObjectId;
  certId: string;
  name: string;
  email?: string;
  issueDate: Date;
  expiryDate?: Date;
  type: string;
  status: "ACTIVE" | "EXPIRED" | "REVOKED";
  createdAt: Date;
  updatedAt: Date;
}

const CertificateSchema = new Schema<ICertificate>(
  {
    certId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String },
    issueDate: { type: Date, required: true },
    expiryDate: { type: Date },
    type: { type: String, required: true },
    status: {
      type: String,
      enum: ["ACTIVE", "EXPIRED", "REVOKED"],
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);

export const Certificate: Model<ICertificate> =
  mongoose.models.Certificate ||
  mongoose.model<ICertificate>("Certificate", CertificateSchema);
