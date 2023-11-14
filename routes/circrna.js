const express = require("express");
const router = express.Router();

const {
    getCircRNA,
    getCircRNABycircAtlasID,
    getCircRNABycircBaseID,
    getCircRNABycircFulldbID,
    getCircRNANoID
} = require('../controllers/circrna.js')
router.get('/', getCircRNA)
router.get('/patternCode/:patternCode/circAtlasID/:circAtlasID', getCircRNABycircAtlasID)
router.get('/patternCode/:patternCode/circBaseID/:circBaseID', getCircRNABycircBaseID)
router.get('/patternCode/:patternCode/circFulldbID/:circFulldbID', getCircRNABycircFulldbID)
router.get('/noID/patternCode/:patternCode', getCircRNANoID)

module.exports = router