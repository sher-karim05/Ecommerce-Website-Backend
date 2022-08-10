const mongoose = require("mongoose");

const connectDatabase = () => {
  const MONGO_URI =
    "mongodb+srv://sherkarim13:ecommercebackend@cluster0.tzno5va.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB Connected Successfully😀`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
