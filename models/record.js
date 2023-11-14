//models--record.js
const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    stu_name: String,
    stu_no: String
})

const Record = mongoose.model("Record", RecordSchema)
module.exports = Record