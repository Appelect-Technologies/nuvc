const News = require("../../models/News");

const createNews = async (req, res) => {
  try {
    const { type = "news" } = req.query;
    const inst = {
      ...req.body,
      type,
    };
    await News.create(inst);
    // console.log("News added");
    return res.status(200).json({ msg: "new News added" });
  } catch (error) {
    console.log("News added", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getAllNews = async (req, res) => {
  try {
    console.log("News gets", req.query);
    const { limit = 30, type = "news" } = req.query;
    const news = await News.find({ type }).limit(limit);
    // const news = await News.find({});
    console.log("News get", news);
    return res.status(200).json({ msg: "new News afatched", news });
  } catch (error) {
    console.log("get Newss", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getNews = async (req, res) => {
  try {
    console.log("News one get", req.query);
    const news = await News.findOne({ _id: req.query.id });
    console.log("News get", news);
    return res.status(200).json({ msg: "new News fatched", news });
  } catch (error) {
    console.log("get Newss", error);
    return res.status(500).json({ msg: "server error" });
  }
};
// const getNewssByEmail = async (req, res) => {
//   try {
//     console.log("News get", req.query);
//     const Newss = await News.find({ email: req.query.email });
//     console.log("News get", Newss);
//     return res.status(200).json({ msg: "new News fatched", Newss });
//   } catch (error) {
//     console.log("get Newss", error);
//     return res.status(500).json({ msg: "server error" });
//   }
// };

const deleteNews = async (req, res) => {
  try {
    const news = await News.deleteOne({ _id: req.query._id });
    console.log("News deleted", news);
    return res.status(200).json({ msg: "News deleted" });
  } catch (error) {
    console.log("get Newss", error);
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = { createNews, getNews, getAllNews, deleteNews };
