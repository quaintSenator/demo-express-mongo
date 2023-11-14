const mongoose = require("mongoose");

const CircrnaSchema
= new mongoose.Schema({
  circFulldbID: String,
  circAtlasID: String,
  circBaseID: String,
  gene: String,
  position: String,
  isoform_count: Number,
  miRNAbindingsite: Number,
  RBPbindingsite: Number,
  has_IRES: Boolean,
  has_cORF: Boolean,
  has_m6A:  Boolean,
  has_TIS:  Boolean
});

//mongodb cloud的collection名应当与这里的name对应
const collectionName = "makecircrnasearchresults"
const Circrna = mongoose.model(collectionName, CircrnaSchema);

module.exports = Circrna;
