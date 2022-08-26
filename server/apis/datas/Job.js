const JOB = require("../../models/Job");

const createJob = async (req, res) => {
  try {
    const { title } = req.body;
    // console.log(" req.body", req.body);
    const job = await JOB.create(req.body);
    // console.log("job added");
    return res.status(200).json({ msg: "new job added", job });
  } catch (error) {
    console.log("job added", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getJobs = async (req, res) => {
  try {
    console.log("job gets", req.query);
    const jobs = await JOB.find().limit(req.query.limit);
    console.log("job get");
    return res.status(200).json({ msg: "new job afatched", jobs });
  } catch (error) {
    console.log("get jobs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getJob = async (req, res) => {
  try {
    console.log("job get", req.query);
    const job = await JOB.findOne({ _id: req.query.id });
    // console.log("job get", job);
    return res.status(200).json({ msg: "new job fatched", job });
  } catch (error) {
    console.log("get jobs", error);
    return res.status(500).json({ msg: "server error" });
  }
};
// const getJobsByEmail = async (req, res) => {
//   try {
//     console.log("job get", req.query);
//     const jobs = await JOB.find({ email: req.query.email });
//     console.log("job get", jobs);
//     return res.status(200).json({ msg: "new job fatched", jobs });
//   } catch (error) {
//     console.log("get jobs", error);
//     return res.status(500).json({ msg: "server error" });
//   }
// };

const deleteJob = async (req, res) => {
  try {
    const jobs = await JOB.deleteOne({ title: req.query.title });
    console.log("job deleted", job);
    return res.status(200).json({ msg: "job deleted" });
  } catch (error) {
    console.log("get jobs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = { createJob, getJob, getJobs, deleteJob };
