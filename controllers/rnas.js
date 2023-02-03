const Rna = require("../models/Rna.js");
const { options } = require("../routes/rnas.js");

const getRnas = (req, res) => {
  console.log("getRnas is launched");
  res.header("Access-Control-Allow-Origin", "*");

  Rna.find({
    begin_position: { $gt: 10000000 },
  })
    .limit(5)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
};

const getRnasWithSkip = (req, res) => {
  console.log("getRnasWithSkip is launched");
  res.header("Access-Control-Allow-Origin", "*");
  var pNo = req.params.PageNo;
  var pSize = req.params.PageSize;

  Rna.find()
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
const getRnasBygc = (req, res) => {
  console.log("getRnasBygc is launched");
  res.header("Access-Control-Allow-Origin", "*");
  var pNo = req.params.PageNo;
  var pSize = req.params.PageSize;

  var chr = req.params.Chr;
  var beginpos = req.params.Begin;
  var endpos = req.params.End;

  console.log(pNo);
  console.log(pSize);

  Rna.find({
    "isoforms.0.chromosome": chr,
    begin_position: { $gt: beginpos },
    end_position: { $lt: endpos },
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
const getRnasByid = (req, res) => {
  console.log("getRnasByid is launched");
  res.header("Access-Control-Allow-Origin", "*");
  var isoid = req.params.isoid;

  Rna.find({
    "isoforms.isoform_id": isoid,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
};
const downloadFile = (req, res) => {
  console.log("download file!");
  folderPath = "./public/files/";
  var filename = req.params.Fileid;

  //if (req.params.Fileid == "f1") {}

  res.download(folderPath + filename, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  getRnas,
  getRnasBygc,
  getRnasByid,
  getRnasWithSkip,
  downloadFile,
};
