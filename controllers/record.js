//controller--record.js
const Record = require('../models/record.js')

const getRecord = (req, res)=>{
    Record.find({
        stu_name: req.params.stu_name
    }).then((result)=>{
        console.log(result)
        res.status(200).json(
            {result}
        )
    }).catch((err)=>{console.log(err)})
}
const getRecords = (req, res)=>{
    Record.find({}).then((result)=>{
        console.log(result)
        res.status(200).json({result})
    })
}
module.exports = {getRecord, getRecords}