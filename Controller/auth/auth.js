const jwt = require('jsonwebtoken')
 const Admin = require("../../model/admin.model")

const checkToken = async function(req, res, next){
    try {
        const token = req.headers.token
        if(!token){
            throw new Error("token is not found")
        }
        const decode = jwt.verify(token,process.env.jwt_Sign )
        if(!decode){
            throw new Error("Invalid Token")
        }
        console.log("decode--",decode);
        const checkAdmin = await Admin.findById(decode.id)
        console.log(checkAdmin);
        if(!checkAdmin){
            throw new Error("Admin is Not Valid")
        }
        next()
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message : error.message
        })
    }
}

module.exports = {checkToken}