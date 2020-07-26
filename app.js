const express = require('express')
const app = express()
const port = 9000

const indexRouter = require('./Controllers/index');
app.use('/vicky',indexRouter);
app.listen(port, () =>{
    console.log('front end service connected');
})