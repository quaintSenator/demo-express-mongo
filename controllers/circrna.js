const CircRNA = require("../models/circrna.js")

//const {  } = require("../routes/circrna.js");

const getCircRNA = (req, res) => {
  console.log("getCircRNA is launched");
  res.header("Access-Control-Allow-Origin", "*");

  CircRNA.find({
    
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

const patternTemplate = ['cORF', 'IRES', 'm6A', 'TIS', 'miRNABinding', 'RBPBinding']
function decodePattern(patternCode){
  let patternList = new Array(6).fill(true)

  let bit = 1
  let div = 2
  for(let i = 0; i <= 5; i++){
    bit = patternCode % div
    patternCode -= bit
    patternList[i] = (bit!=0)
    div *= 2
  }
  return patternList
}

const getCircRNABycircFulldbID = (req, res)=>{
  console.log("getCircRNABycircFulldbID is launched");
  res.header("Access-Control-Allow-Origin", "*");

  let circFulldbID = req.params.circFulldbID
  let patternList = decodePattern(req.params.patternCode)

  console.log(circFulldbID)
  console.log(patternList)

  let searchObject = {
    "circFulldbID": circFulldbID
  }
  for(let i = 0; i <= 3; i++){
    if(patternList[i]){
      searchObject[patternTemplate[i]] = true
    }
  }
  //patternTemplate[4] [5]是miRNA和RBP，不适用上述规范
  if(patternList[4]){
    searchObject['miRNAbindingsite'] = { $gt: 0 }
  }
  if(patternList[5]){
    searchObject['RBPbindingsite'] = { $gt: 0 }
  }
  console.log(searchObject)
  
  CircRNA.find(searchObject)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
}
const getCircRNABycircAtlasID = (req, res)=>{
  console.log("getCircRNABycircAtlasID is launched");
  res.header("Access-Control-Allow-Origin", "*");

  let circAtlasID = req.params.circAtlasID
  let patternList = decodePattern(req.params.patternCode)

  console.log(patternList)
  
  let searchObject = {
    "circAtlasID": circAtlasID
  }
  for(let i = 0; i <= 3; i++){
    if(patternList[i]){
      searchObject[patternTemplate[i]] = true
    }
  }
  //patternTemplate[4] [5]是miRNA和RBP，不适用上述规范
  if(patternList[4]){
    searchObject['miRNAbindingsite'] = { $gt: 0 }
  }
  if(patternList[5]){
    searchObject['RBPbindingsite'] = { $gt: 0 }
  }
  console.log(searchObject)
  
  CircRNA.find(searchObject)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
}
const getCircRNABycircBaseID = (req, res)=>{
  console.log("getCircRNABycircBaseID is launched");
  res.header("Access-Control-Allow-Origin", "*");

  let circBaseID = req.params.circBaseID
  let patternList = decodePattern(req.params.patternCode)

  console.log(patternList)
  
  let searchObject = {
    "circBaseID": circBaseID
  }
  for(let i = 0; i <= 3; i++){
    if(patternList[i]){
      searchObject[patternTemplate[i]] = true
    }
  }
  //patternTemplate[4] [5]是miRNA和RBP，不适用上述规范
  if(patternList[4]){
    searchObject['miRNAbindingsite'] = { $gt: 0 }
  }
  if(patternList[5]){
    searchObject['RBPbindingsite'] = { $gt: 0 }
  }
  console.log(searchObject)

  CircRNA.find(searchObject)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
}

const getCircRNANoID = (req, res)=>{
  console.log("getCircRNANoID is launched");
  res.header("Access-Control-Allow-Origin", "*");
  
  let patternList = decodePattern(req.params.patternCode)

  console.log(patternList)

  let searchObject = {}
  for(let i = 0; i <= 3; i++){
    if(patternList[i]){
      searchObject[patternTemplate[i]] = true
    }
  }
  //patternTemplate[4] [5]是miRNA和RBP，不适用上述规范
  if(patternList[4]){
    searchObject['miRNAbindingsite'] = { $gt: 0 }
  }
  if(patternList[5]){
    searchObject['RBPbindingsite'] = { $gt: 0 }
  }
  console.log(searchObject)
  
  CircRNA.find(searchObject)
    .then((result) => {
      console.log(result);
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ msg: error });
    });
}

module.exports = {
  getCircRNA,
  getCircRNABycircAtlasID,
  getCircRNABycircBaseID,
  getCircRNABycircFulldbID,
  getCircRNANoID
};
