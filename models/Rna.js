const mongoose = require("mongoose");

const RnaSchema = new mongoose.Schema({
  begin_position: Number,
  end_position: Number,
  isoforms: [
    {
      chromosome: String,
      strand: String,
      isoform_id: String,
      segment_number: Number,
      segments: [
        {
          segment_length: Number,
          segment_begin: Number,
          absolute_begin: Number,
          absolute_end: Number
        }
      ]
    }
  ]
});

const Rna = mongoose.model("Rna", RnaSchema);

module.exports = Rna;
