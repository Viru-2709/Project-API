const Inquiry = require('../model/inquiry.model')

const createInquiry = async function(req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.name || !req.body.email ||!req.body.number ||!req.body.subject || !req.body.message){
            throw new Error("Please add valid field")
        }
        const data = await Inquiry.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "Inquiry is generated sucessfully",
            data 
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })      
    }
};
module.exports = {createInquiry}