const FAQ = require("../../models/FAQ");

const createFAQ = async (req, res) => {
  try {
    const { title } = req.body;
    const FAQ = FAQ.updateOne(
      {
        title,
      },
      req.body,
      {
        upsert: true,
      }
    );
    console.log("FAQ added", FAQ);
    return res.status(200).json({ msg: "new FAQ added" });
  } catch (error) {
    console.log("FAQ added", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getFAQs = async (req, res) => {
  try {
    const FAQs = await FAQ.find();
    console.log("FAQ get");
    return res.status(200).json({ msg: "new FAQ afatched", FAQs });
  } catch (error) {
    console.log("get FAQs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getFAQ = async (req, res) => {
  try {
    const FAQ = await FAQ.findOne({ title: req.query.title });
    console.log("FAQ get");
    return res.status(200).json({ msg: "new FAQ fatched", FAQ });
  } catch (error) {
    console.log("get FAQs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const deleteFAQ = async (req, res) => {
  try {
    const FAQs = await FAQ.deleteOne({ title: req.query.title });
    console.log("FAQ deleted", FAQ);
    return res.status(200).json({ msg: "FAQ deleted" });
  } catch (error) {
    console.log("get FAQs", error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = { createFAQ, getFAQ, getFAQs, deleteFAQ };
