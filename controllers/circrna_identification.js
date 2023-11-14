const Circrna_identification = require("../models/circrna_identification")

const getCircrna_identification = (req, res) => {
    console.log("getCircrna_identification is launched");
    res.header("Access-Control-Allow-Origin", "*");
    
    let circFulldbID = req.params.circFulldbID
    console.log(circFulldbID)
    Circrna_identification.find({
        circFulldbID: circFulldbID
    })
    .then((result)=>{
        console.log(result)
        res.status(200).json({ result });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: error });
    });
}

module.exports = {
    getCircrna_identification
}