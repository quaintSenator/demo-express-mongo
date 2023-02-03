const express = require("express");
const mongoose = require("mongoose");
const app = express();
//const products = require('./data.js')
//const products_routes = require("./routes/products.js");
const rnas_routes = require("./routes/rnas.js");
//var cors = require('cors')

require("dotenv").config();

var uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then((result) => app.listen(5000))
  .catch((err) => {
    console.log("err:");
    console.log(err);
    console.log(Error);
  });

//app.use(cors());

app.all("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/static", express.static("public"));
app.use(express.json());

app.use("/api/rnas", rnas_routes);
