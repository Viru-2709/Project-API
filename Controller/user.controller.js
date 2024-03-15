const User = require('../model/user.model')
const bcrypt = require('bcrypt')

const SignUp = async function(req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.username || !req.body.email ||!req.body.password){
            throw new Error("Please add valid field")
        }
        req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await User.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "New User Created",
            data : data,
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
        
    }
};



const LogIn =  async function(req, res, next) {
    try {
        const checkUser = await User.findOne({email : req.body.email})
        if(!checkUser){
            throw new Error("Invalid Email")
        }
        const checkPass = await bcrypt.compare(req.body.password,checkUser.password)
        if(!checkPass){
            throw new Error("Invalid Passsword")
        }
        res.status(200).json({
            status : "Success",
            message : "Login Successful",
        })
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        })
        
    }
};

module.exports = {SignUp , LogIn}