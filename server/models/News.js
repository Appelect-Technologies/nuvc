const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
