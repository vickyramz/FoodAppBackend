const express = require('express')
const app = express()
const router =express.Router()
const RegisterScheme = require('../Models/Register')

router.post('/',async(req,res)=>{
    console.log('reuest',req)
    const userData = new RegisterScheme({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber
    });
    try{
        let RegisteredData=await userData.save();
        res.json(RegisteredData)
    }catch(err){
        res.json('error')
    }
 
})
module.exports=router;