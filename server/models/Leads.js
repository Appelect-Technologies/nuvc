const mongoose = require("mongoose");

const leadSchema = mongoose.Schema(
  {
    name: String,
    reason: {
      type: String,
      enum: ["payment", "query", "admission", "exam"],
      default: "query",
    },
    email: String,
    number: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Leads", leadSchema);
