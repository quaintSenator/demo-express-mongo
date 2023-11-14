const mongoose = require('mongoose')

const CircRNAIsoformRelationSchema =
new mongoose.Schema({
    circFulldbID: String,
    isoformID: String
})

const relationCollectionName = "makecircrnaisoformrelations"
const circRNAisoformRelation
= mongoose.model(
    relationCollectionName, CircRNAIsoformRelationSchema)

module.exports = circRNAisoformRelation