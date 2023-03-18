import mongoose, { Schema } from 'mongoose';

export const FormationSchema = new Schema(
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
    dateFrom: {
      type: Date,
      default: Date.now(),
    },
    dateTo: {
      type: Date,
      default: Date.now(),
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
