const Digital = require("../../models/DigitalLearning");

const createDigital = async (req, res) => {
  try {
    console.log(" req.body", req.body);
    await Digital.create(req.body);
    console.log("Digital added");
    return res.status(200).json({ msg: "new Digital added" });
  } catch (error) {
    console.log("Digital added", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getDigitals = async (req, res) => {
  try {
    console.log("Digital gets", req.query);
    const digitals = await Digital.find().limit(req.query?.limit);
    console.log("Digital get");
    return res
      .status(200)
      .json({ msg: "new Digital afatched", courses: digitals });
  } catch (error) {
    console.log("get Digitals", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getDigital = async (req, res) => {
  try {
    console.log("Digital get", req.query);
    const digital = await Digital.findOne({ _id: req.query.id });
    console.log("Digital get", digital);
    return res.status(200).json({ msg: "new Digital fatched", digital });
  } catch (error) {
    console.log("get Digitals", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const deleteDigital = async (req, res) => {
  try {
    const Digitals = await Digital.deleteOne({ _id: req.query.id });
    console.log("Digital deleted", Digital);
    return res.status(200).json({ msg: "Digital deleted" });
  } catch (error) {
    console.log("get Digitals", error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = {
  createDigital,
  getDigital,
  getDigitals,
  deleteDigital,
};
