const express = require("express");
const router = express.Router();

const {
    getCirc_mi_interactByciID,
    getCirc_mi_interactBymiID
} = require("../controllers/circ_mi_interact.js");

router.get("/ByciID/:circRNAID/:PageSize/:PageNo", getCirc_mi_interactByciID);
router.get("/BymiID/:miRNAID/:PageSize/:PageNo", getCirc_mi_interactBymiID);

//router.post("/", createProduct);

//router.put("/:productID", updateProduct);

//router.delete("/:productID", deleteProduct);

module.exports = router;

