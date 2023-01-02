const express = require('express');
const productRoutes = require('./api/routes/product'); 
const orderRoutes = require('./api/routes/orders'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./db');
require("dotenv").config();
//morgan is used to get the log of requests
const morgan = require('morgan');

connectDB();
const app = express();
// mongoose.connect('mongodb+srv://nilay302:'+ process.env.MONGO_ATLAS_PW +'@rest-api-node.zsbnldt.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-type, Accept, Authorization");
    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

//anything starting with /products will be handled by productRoute
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

//if any route doesn't matches with it
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
     res.status(error.status || 500);
     res.json({
        error:{
            message:error.message
        }
     })
})
module.exports = app;