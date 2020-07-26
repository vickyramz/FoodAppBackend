const express = require('express')
const app = express()
const port = 9000
const mongoose = require ('mongoose');
const url = 'mongodb://localhost/MongoDB'
mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection;
con.on('open',(sucess,failure)=>{
    console.log('connnected');
})
app.use(express.json)
const RegisterController = require('./Controllers/RegisterController');
app.use('/vicky',RegisterController);

app.listen(port, () =>{
    console.log('front end service connected');
})