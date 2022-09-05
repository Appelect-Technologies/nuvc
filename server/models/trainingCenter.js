const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    state: String,
    district: String,
    tpName: String,
    tcName: String,
    sector: String,
    jobRole: String,
    tcSpocName: String,
    tcSpocEmail: String,
    tcSpocMobile: String,
    tcAddress: String,
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("trainingcenters", Schema);
