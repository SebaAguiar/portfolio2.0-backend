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
    type: {
      type: ['Programming Lenguage', 'Backend', 'Frontend', 'Database', 'Tool'],
      default: 'Backend',
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
