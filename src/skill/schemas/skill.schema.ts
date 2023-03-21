import mongoose, { Schema } from 'mongoose';

export const SkillSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
    },
    image: {
      type: String,
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
