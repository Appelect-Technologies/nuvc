const mongoose = require("mongoose");

const digitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
    },
    language: {
      type: String,
    },
    duration: {
      type: String,
    },
    sector: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
    },
    certificationProgram: {
      type: String,
    },
    certificationPartner: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Digital", digitalSchema);
