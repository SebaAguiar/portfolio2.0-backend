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
    type: String,
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
  whatIDo: [
    {
      imageLigth: {
        type: String,
      },
      imageDark: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});
