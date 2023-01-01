const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

//below line is used as application middleware..i.e it gets applied to all the routes present
// app.use(reqFilter)
route.use(reqFilter);
app.get('/',(req,res)=>{
    res.send('welcome to home page');
});
route.get('/users',reqFilter,(req,res)=>{
    res.send('Welcome to user page');
});

app.use('/',route);
app.listen(4500);