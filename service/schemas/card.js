const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const card = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for card"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "normal", "hard"],
    },
    category: {
      type: String,
      enum: ["stuff", "family", "health", "learning", "leisure", "work"],
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    type: {
      type: String,
      enum: ["task", "challange"],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const Card = mongoose.model("card", card);
module.exports = Card;
