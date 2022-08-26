const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/follow-me-social-business-theme-design_24877-50426.webp",
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
