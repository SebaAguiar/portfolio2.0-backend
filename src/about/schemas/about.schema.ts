import mongoose, { Schema } from 'mongoose';

export const AboutSchema = new Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  names: {
    type: String,
  },
  lastName: {
    type: String,
  },
  birth: {
    type: Date,
  },
  residence: {
    String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
});
