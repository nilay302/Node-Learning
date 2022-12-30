//importing express
const express = require('express');
const path = require('path');
///creating app for express

const app = express();
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));


app.set('view engine','ejs')
//making route for homepage
app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send(`Hello ${req.query.name}, How is your day so far?`);
});

console.log(publicPath);

//dynamic routing using ejs
app.get('/profile',(req,res)=>{
    const user = {
        name: 'Nilay Shirke',
        email:'nilay.shirke@yahoo.com',
        skills:['react','three.js','js']
    };
    res.render('profile',{user});
});

app.get('/login',(req,res)=>{
    res.render('login');
});
//creating server at 4500
app.listen(4500);