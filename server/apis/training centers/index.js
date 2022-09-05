const TrainingCenters = require("../../models/trainingCenter");

const getTrainingCenters = async (req, res) => {
  try {
    const instance = await TrainingCenters.find({}, "-__v").lean();
    res.send(instance);
  } catch (error) {
    console.log(error);
    req.status(400).json({ error: "Error occured" });
  }
};

const createTrainingCenters = async (req, res) => {
  try {
    await TrainingCenters.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    req.status(400).json({ error: "Error occured" });
  }
};

module.exports = {
  getTrainingCenters,
  createTrainingCenters,
};
