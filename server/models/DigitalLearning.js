const mongoose = require("mongoose");

const digitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    certificationProgram: {
      type: String,
    },
    certificationPartner: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Digital", digitalSchema);
