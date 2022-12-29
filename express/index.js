//importing express
const express = require('express');
///creating app for express
const app = express();

//making route for homepage
app.get('',(req,res)=>{
    res.send('Hello, How is your day so far?');
});

//making route for about page
app.get('/about',(req,res)=>{
    res.send('Hello, How this is about you!');
});

//creating server at 4500
app.listen(4500);