//routes--record.js
const express = require("express");
const router = express.Router();

const { getRecord, getRecords }
= require('../controllers/record.js');
router.get('/', getRecords)
router.get('/:stu_name', getRecord)

module.exports = router

