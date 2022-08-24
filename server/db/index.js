const Mongoose = require("mongoose");

const dburl =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_DB
    : process.env.DEV_DB;

console.log(dburl);
const connection = Mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection
  .then((success) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("connection err ", err);
  });
