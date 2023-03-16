import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcryptjs';

export const AdminSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    names: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const saltRound = 10;
AdminSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    hash(
      this.password,
      saltRound,
      function (err, hashedPassword) {
        if (err) {
          next(err);
        } else {
          this.password = hashedPassword;
          next();
        }
      }.bind(this),
    );
  } else {
    next();
  }
});

AdminSchema.methods.isCorrectPassword = function (password, callback) {
  compare(password, this.password, function (err, res) {
    if (err) {
      callback(err);
    } else {
      callback(err, res);
    }
  });
};
