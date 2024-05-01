import { min } from "date-fns";
import mongoose from "mongoose";
import { type } from "os";

const surveySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    food: [
      {
        type: String,
        required: true,
        enum: ["Pizza", "Pasta", "Pap and Wors", "Other"],
      },
    ],
    movieRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    radioRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    eatingOutRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    tvRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Survey = mongoose.model("Survey", surveySchema);
