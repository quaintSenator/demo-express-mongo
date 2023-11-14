const mongoose = require("mongoose");

const CircRNAIdentificationSchema
=
new mongoose.Schema({
    species: String,
    circFulldbID: String,
    chromosome: String,
    position: String,
    isoform_count: Number
})

const collectionName = "makecircrnaidentifications"
const circRNAidentification = mongoose.model(collectionName, CircRNAIdentificationSchema)

module.exports = circRNAidentification