const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    url1: {
      type: String,
      default: "",
    },
    url2: {
      type: String,
      default: "",
    },
    qualification: {
      type: String,
      required: true,
    },
    number_of_vacancies: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    syllabus_url: {
      type: String,
      required: true,
    },
    exam_date: {
      type: String,
      required: true,
    },
    application_fee_dis: {
      type: String,
      required: true,
    },
    application_fee: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("JOB", jobSchema);
