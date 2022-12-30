const express = require('express');
const app = express();

//creating a middleware
//this is a application level middleware
const reqFilter = (req,res,next)=>{
    // console.log('reqFilter');
    if (!req.query.age){
        res.send('please provide age');
    }
    else if (req.query.age<18){
        res.send('Under Age to visit this website');
    }
    else{
        next();
    }
    
};

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('welcome to home page');
});
app.get('/users',(req,res)=>{
    res.send('Welcome to user page');
});
app.listen(4500);