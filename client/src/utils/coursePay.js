import { config } from "../config";
import axios from "axios";
import { toast } from "react-toastify";

export default async function coursePay(courseId, uid, body) {
  body.id = courseId;
  body.type = "course";
  body.uid = uid;
  const res = await axios.post(config.baseUrl + config.pay, body);
  const data = res.data;
  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "Navachar",
    description: "Wallet Transaction",
    image: "https://nuvc.org/favicon.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
      const email = body?.email;
      savePayment({
        id: courseId,
        uid,
        email,
        type: "course",
        amount: data.amount,
        paymentID: response.razorpay_payment_id,
        orderId: response.razorpay_order_id,
      });
    },
    prefill: {
      name: body?.name,
      email: body?.email,
      contact: body?.phone,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  paymentObject.on("payment.failed", function (response) {
    alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
}

const savePayment = async (data) => {
  axios
    .post(config.baseUrl + config.subscription, data)
    .then((res) => {
      console.log("payment deetails save");
      toast.success("Payment is successful");
    })
    .catch((err) => {
      toast.error("Internal server error");
    });
};
