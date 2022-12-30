//importing express
const express = require('express');
const path = require('path');
///creating app for express

const app = express();
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

//making route for homepage
app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send(`Hello ${req.query.name}, How is your day so far?`);
});

console.log(publicPath);

//making route for about page
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

//creating server at 4500
app.listen(4500);