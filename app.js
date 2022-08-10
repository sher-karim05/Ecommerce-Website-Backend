const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/error");

//route imports
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/user.routes");
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);

//using bodyParser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//using express
app.use(express.json());

//Using middleware
app.use(errorMiddleware);

module.exports = app;
