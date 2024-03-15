const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect("mongodb+srv://Viru:viru123@cluster0.xt4zi9h.mongodb.net/E-Sports-Arena-API", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("DataBase is ConneCted........!")})
.catch((err) => {console.log(err.message)})