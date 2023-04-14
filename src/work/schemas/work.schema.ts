import mongoose, { Schema } from 'mongoose';

export const WorkSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
    },
    projectUrl: {
      type: String,
    },
    stack: {
      type: Array(String),
    },
    company: {
      type: String,
    },
    companyUrl: {
      type: String,
    },
    dateFrom: {
      type: Date,
    },
    dateTo: {
      type: Date,
    },
    description: {
      type: String,
    },
    position: {
      type: String,
    },
    pepito: {
      type: Number,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
