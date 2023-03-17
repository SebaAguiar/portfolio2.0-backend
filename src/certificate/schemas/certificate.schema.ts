import mongoose, { Schema } from 'mongoose';

export const CertificateSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
    },
    company: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
