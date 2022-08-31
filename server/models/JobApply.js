const mongoose = require("mongoose");

const jobApplySchema = mongoose.Schema(
  {
    jobApplyId: {
      type: String,
      required: true,
      unique: true,
    },
    jobId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "JOB",
    },
    email: {
      type: String,
      required: true,
    },
    fname: String,
    lname: String,
    gender: String,
    fatherName: String,
    motherName: String,
    phone: String,
    dob: String, //
    religion: String,

    //jorrole   category   ouside india   exprice

    address: String,
    district: String,
    hn: String,
    pin: String,
    state: String,
    street: String,

    qulification: String,
    degree: String,
    discipline: String,
    pdegree: String,
    pdiscipline: String,

    prefrenceA: String,
    prefrenceB: String,
    prefrenceC: String,
    role: String,
    category: String,
    experience: String,
    expComment: String,
    isJobOutsideIndia: {
      type: Boolean,
      default: false,
    },

    signature: String,
    photo: String,
    idBack: String,
    idFront: String,
    idName: String,
    step: Number,
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("JobApply", jobApplySchema);
