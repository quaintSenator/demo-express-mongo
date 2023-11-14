const Circ_mi_interact = require("../models/circ_mi_interact.js");
const { options } = require("../routes/circ_mi_interact.js");

const getCirc_mi_interactByciID = (req, res) => {
    console.log("getCirc_mi_interactByciID is launched");
    res.header("Access-Control-Allow-Origin", "*");
    let circID = req.params.circRNAID;
    let pNo = req.params.PageNo;
    let pSize = req.params.PageSize;
    console.log("On Query is circID = " + circID);
    Circ_mi_interact.find({
        "circRNAID": circID
    })
    .limit(pSize)
    .skip((pNo - 1) * pSize)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
};
const getCirc_mi_interactBymiID = (req, res) => {
    console.log("getCirc_mi_interactBymiID is launched");
    res.header("Access-Control-Allow-Origin", "*");
    var miID = req.params.miRNAID;
    var pNo = req.params.PageNo;
    var pSize = req.params.PageSize;
    console.log(pNo);
    console.log(pSize);
    Circ_mi_interact.find({
      "miRNAID": miID
  })
    .limit(pSize)
    .skip((pNo - 1) * pSize)
      .then((result) => {
          console.log("On Query is miID = " + miID);
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
};


module.exports = {
    getCirc_mi_interactByciID,
    getCirc_mi_interactBymiID
};
