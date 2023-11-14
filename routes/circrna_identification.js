const express = require("express");
const router = express.Router();

const { getCircrna_identification } = require('../controllers/circrna_identification')
router.get('/circFulldbID/:circFulldbID',
           getCircrna_identification)

module.exports = router