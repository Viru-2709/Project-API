const Admin = require('../model/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adminSignUp = async function(req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.username || !req.body.email ||!req.body.password){
            throw new Error("Please add valid field")
        }
        req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await Admin.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "New Admin Created",
            data : data,
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
        
    }
};



const adminLogIn =  async function(req, res, next) {
    try {
        const checkAdmin = await Admin.findOne({email : req.body.email})
        if(!checkAdmin){
            throw new Error("Invalid Email")
        }
        const checkPass = await bcrypt.compare(req.body.password,checkAdmin.password)
        if(!checkPass){
            throw new Error("Invalid Passsword")
        }
        const token = jwt.sign({id : checkAdmin._id},process.env.jwt_Sign)
        res.status(200).json({
            status : "Success",
            message : "Login Successful",
            token
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
        
    }
};

module.exports = {adminSignUp , adminLogIn}