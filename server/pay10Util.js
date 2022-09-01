var request = require("request");
var sha256 = require("js-sha256");

var payment_url = {
  prod: "https://secure.pay10.com/pgui/jsp/paymentrequest",
  test: "https://secure.pay10.com/pgui/jsp/paymentrequest",
};

var API = {
  makePayment: "_payment",
  paymentResponse: "payment/op/getPaymentResponse?",
  refundPayment: "payment/merchant/refundPayment?",
  refundStatus: "treasury/ext/merchant/getRefundDetailsByPayment?",
};

module.exports = {
  // headers: {
  //     'authorization': 'YOUR-AUTHORIZATION-HEADER' // will be provided by pay10
  // },

  credentails: {
    pay_id: "1083520726170225", // will be provided by pay10
    salt: "feffecf5ab124ced", // will be provided by pay10
    merchant_hosted_key: "1351EEDC87255C65FCAB529CAB48D57E",
  },

  mode: "test",

  isProdMode: function (mode) {
    if (mode) {
      this.mode = "prod";
    } else {
      this.mode = "test";
    }
  },

  setCredentails: function (pay_id, salt) {
    this.credentails.pay_id = pay_id;
    this.credentails.salt = salt;
  },

  getPaymentUrl: function () {
    if (this.mode == "prod") {
      return "https://secure.pay10.com/pgui/jsp/paymentrequest";
    } else {
      return "https://secure.pay10.com/pgui/jsp/paymentrequest";
    }
  },

  generateHash: function (data) {
    var preHashString = "";
    var dataKeys = [
      "AMOUNT",
      "CURRENCY_CODE",
      "CUST_CITY",
      "CUST_COUNTRY",
      "CUST_EMAIL",
      "CUST_NAME",
      "CUST_PHONE",
      "CUST_SHIP_CITY",
      "CUST_SHIP_COUNTRY",
      "CUST_SHIP_NAME",
      "CUST_SHIP_PHONE",
      "CUST_SHIP_STATE",
      "CUST_SHIP_STREET_ADDRESS1",
      "CUST_SHIP_ZIP",
      "CUST_STATE",
      "CUST_STREET_ADDRESS1",
      "CUST_ZIP",
      "ORDER_ID",
      "PAY_ID",
      "PRODUCT_DESC",
      "RETURN_URL",
      "TXNTYPE",
    ];
    dataKeys.forEach(function (key) {
      preHashString += key + "=" + data[key] + "~";
    });

    if (data["MERCHANT_PAYMENT_TYPE"] && data["MERCHANT_PAYMENT_TYPE"] != "") {
      preHashString +=
        "MERCHANT_PAYMENT_TYPE=" + data["MERCHANT_PAYMENT_TYPE"] + "~";
    }

    preHashString = preHashString.substring(0, preHashString.length - 1); // remove extra ~

    return sha256(preHashString + this.credentails.salt).toUpperCase();
  },

  createTransaction: function (data) {
    var hash = this.generateHash(data);
    return Object.assign(data, { HASH: hash });
  },
};
