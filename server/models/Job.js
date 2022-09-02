const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    icon: {
      type: String,
      default:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/follow-me-social-business-theme-design_24877-50426.webp",
    },
    description: {
      type: String,
      default: "",
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
      default: "",
    },
    number_of_vacancies: {
      type: String,
      default: "",
    },
    salary: {
      type: String,
      default: "",
    },
    syllabus_url: {
      type: String,
      default: "",
    },
    exam_date: {
      type: String,
      default: "",
    },
    application_fee_dis: {
      type: String,
      default: "",
    },
    application_fee: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JOB", jobSchema);
