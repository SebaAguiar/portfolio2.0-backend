import mongoose, { Schema } from 'mongoose';

export const CertificateSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
    },
    certificateUrl: {
      type: String,
    },
    company: {
      type: String,
    },
    companyUrl: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    image: {
      type: String,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
