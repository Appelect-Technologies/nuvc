const UserSubscription = require("../../models/UserSubscription");
const JobApply = require("../../models/JobApply");
const Jobs = require("../../models/Job");
const Courses = require("../../models/DigitalLearning");
const Mongoose = require("mongoose");

const userSubscription = async (req, res) => {
  try {
    const { id, uid, type, email, amount, paymentID, orderId } = req.body;
    // console.log("---------sub-----", req.body);

    const newUserSubscription = new UserSubscription({
      uid,
      email,
      type,
      subscriptions: {
        id,
        amount,
        paymentID,
        orderId,
      },
    });

    await newUserSubscription.save();
    const job = await JobApply.findOne({ jobApplyId: id });
    console.log("--", job);

    job.isPaid = true;
    await job.save();

    //---------------send email logic===========\

    //------------------end logic-------------

    return res.status(200).json({
      msg: "payment details saved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error",
    });
  }
};

const userSubscription10 = ({
  id,
  uid,
  type,
  email,
  amount,
  paymentID,
  orderId,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newUserSubscription = new UserSubscription({
        uid,
        email,
        type,
        subscriptions: {
          id,
          amount,
          paymentID,
          orderId,
        },
      });
      await newUserSubscription.save();

      if (type === "job") {
        const job = await JobApply.findOne({ jobApplyId: `${id}${email}` });
        // console.log("--", job);
        job.isPaid = true;
        await job.save();
      }
      //---------------send email logic===========\

      //------------------end logic-------------
      console.log("payment details saved");
      resolve("payment details saved");
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

const getSubscriptions = async (req, res) => {
  try {
    const query = req.query || {};
    const data = await UserSubscription.find(query).lean();
    // joining job or course title
    const promisesarr = data.map((item) => {
      if (item.type === "job") {
        return Jobs.findOne(
          {
            _id: Mongoose.Types.ObjectId(item.subscriptions.id),
          },
          "title -_id"
        ).lean();
      } else {
        return Courses.findOne(
          {
            _id: Mongoose.Types.ObjectId(item.subscriptions.id),
          },
          "name -_id"
        ).lean();
      }
    });
    const results = await Promise.all(promisesarr);
    const arr = data.map((item, i) => {
      return {
        ...item,
        subscriptions: {
          ...item.subscriptions,
          title: results[i].title || results[i].name,
        },
      };
    });
    return res.send({ msg: "successful", data: arr });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "error occured" });
  }
};

module.exports = { userSubscription10, userSubscription, getSubscriptions };
