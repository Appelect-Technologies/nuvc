const UserSubscription = require("../../models/UserSubscription");
const JobApply = require("../../models/JobApply");

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

const userSubscription10 = async ({
  id,
  uid,
  type,
  email,
  amount,
  paymentID,
  orderId,
}) => {
  try {
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

    console.log("payment details saved");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userSubscription10, userSubscription };
