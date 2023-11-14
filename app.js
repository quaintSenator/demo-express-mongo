/*
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const rnas_routes = require("./routes/rnas.js");
const circ_mi_interact_routes = require("./routes/circ_mi_interact.js");
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

app.all("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/static", express.static("public"));
app.use(express.json());

app.use("/api/rnas", rnas_routes);
app.use("/api/circ_mi_interact", circ_mi_interact_routes);*/
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
//引入router
const record_routes = require('./routes/record.js')
const circrna_routes = require('./routes/circrna.js')
const circrna_identification_routes = require('./routes/circrna_identification')

//连接数据库
require("dotenv").config();

var uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then((result) => app.listen(port))
  .catch((err) => {
    console.log("err:");
    console.log(err);
  });
//then顺便把监听开启也写进去了

//为了避免本机自己传自己被禁止，需要添加这个抬头，真机时物理server和请求方不是一台机，届时不必加
app.all("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json())
app.use('/api/records', record_routes)
app.use('/api/circrnas', circrna_routes)
app.use('/api/circrnaidentification', circrna_identification_routes)

