const Job = require("../../models/Job");
const JobApply = require("../../models/JobApply");

const personal = async (req, res) => {
  try {
    const {
      jobApplyId,
      jobId = "",
      email,
      fatherName,
      fname,
      gender,
      lname,
      motherName,
      phone,
      step = 1,
      dob,
      religion,
    } = req.body;

    if (jobId.length < 5)
      return res.status(202).json({ msg: "please provide job id" });
    const isApply = await JobApply.findOne({ jobApplyId });
    if (isApply) return res.status(201).json({ msg: "you already applied" });

    const newJobApply = new JobApply({
      jobApplyId,
      jobId,
      email,
      fatherName,
      fname,
      gender,
      lname,
      motherName,
      phone,
      step,
      dob,
      religion,
    });

    await newJobApply.save();
    return res.status(200).json({
      msg: "step 1 completed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const address = async (req, res) => {
  try {
    const {
      jobApplyId,
      jobId = 1,
      address,
      district,
      hn,
      pin,
      state,
      street,
    } = req.body;

    const job = await JobApply.findOne({ jobApplyId });
    console.log("--", job);
    if (!job)
      return res.status(201).json({
        msg: "first you complete step 1",
      });

    job.address = address;

    job.district = district;
    job.hn = hn;
    job.pin = pin;
    job.state = state;
    job.street = street;
    job.step = 2;
    await job.save();
    return res.status(200).json({
      msg: "step 2 completed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const qulification = async (req, res) => {
  try {
    console.log("data q", req.body);
    const {
      jobId,
      jobApplyId,
      qulification,
      degree,
      discipline,
      pdegree,
      pdiscipline,
    } = req.body;

    const job = await JobApply.findOne({ jobApplyId });
    if (!job)
      return res.status(201).json({
        msg: "first you complete step 1 and 2",
      });

    job.qulification = qulification;
    job.degree = degree;
    job.discipline = discipline;
    job.pdegree = pdegree;
    job.pdiscipline = pdiscipline;
    job.step = 3;
    await job.save();
    return res.status(200).json({
      msg: "step 2 completed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const perfrance = async (req, res) => {
  try {
    const {
      jobApplyId,
      jobId,
      prefrenceA,
      prefrenceB,
      prefrenceC,
      role,
      category,
      experience,
      expComment,
      isJobOutsideIndia,
    } = req.body;

    const job = await JobApply.findOne({ jobApplyId });
    if (!job)
      return res.status(201).json({
        msg: "first you complete step 1 and 2",
      });

    job.prefrenceA = prefrenceA;
    job.prefrenceB = prefrenceB;
    job.prefrenceC = prefrenceC;

    job.role = role;
    job.category = category;
    job.experience = experience;
    job.expComment = expComment;
    job.isJobOutsideIndia = isJobOutsideIndia;
    job.step = 4;
    await job.save();
    return res.status(200).json({
      msg: "step 2 completed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const document = async (req, res) => {
  try {
    const { jobId, jobApplyId, signature, photo, idBack, idFront, idName } =
      req.body;

    const job = await JobApply.findOne({ jobApplyId });
    if (!job)
      return res.status(201).json({
        msg: "first you complete step 1 and 2",
      });

    job.signature = signature;
    job.photo = photo;
    job.idBack = idBack;
    job.idFront = idFront;
    job.idName = idName;
    job.step = 5;

    await job.save();

    return res.status(200).json({
      msg: "step 2 completed",
      body: {
        email: job.email,
        name: job.fname + " " + job.lname,
        phone: job.phone,
        jobId,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const getJobsByEmail = async (req, res) => {
  try {
    console.log("job get", req.query);
    const jobs = await JobApply.find({ email: req.query.email });
    console.log("job get", jobs);
    return res.status(200).json({ msg: "new job fatched", jobs });
  } catch (error) {
    console.log("get jobs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const checkApplyStatus = async (req, res) => {
  try {
    console.log("job get", req.query);
    const job = await JobApply.findOne({ jobApplyId: req.query.id });
    console.log("job get", job);
    // if (job && !job.isPaid && job.step === 5)
    if (job) {
      return res.json({
        msg: "job fatched",
        applyStatus: {
          _id: job._id,
          jobId: job.jobId,
          jobApplyId: job.jobApplyId,
          isPaid: job.isPaid,
          name: job.fname + " " + job.lname,
          email: job.email,
          phone: job.phone,
          step: job.step,
        },
      });
    } else {
      res.sendStatus(404);
    }

    // return res.status(200).json({
    //   msg: "job fatched",
    //   applyStatus: {
    //     _id: job._id,
    //     jobApplyId: job.jobApplyId,
    //     isPaid: job.isPaid,
    //     name: job.fname + " " + job.lname,
    //     email: job.email,
    //     phone: job.phone,
    //     step: job.step,
    //   },
    // });
  } catch (error) {
    console.log("get jobs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = {
  perfrance,
  personal,
  qulification,
  address,
  document,
  getJobsByEmail,
  checkApplyStatus,
};
