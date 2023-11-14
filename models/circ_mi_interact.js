const mongoose = require("mongoose");

const CircMiInteractSchema = new mongoose.Schema({
    circRNAID: String,
    miRNAID: String,
    binding_sites: String,
    total_score: Number
});

const CircMiInteract = mongoose.model("Circ_mi_interact", CircMiInteractSchema);

module.exports = CircMiInteract;