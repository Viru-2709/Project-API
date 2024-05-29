const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("DataBase is ConneCted........!")})
.catch((err) => {console.log(err.message)})
