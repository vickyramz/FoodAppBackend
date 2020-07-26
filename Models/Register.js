const mongoose = require ('mongoose')
 
const Registerschema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('register',Registerschema)


