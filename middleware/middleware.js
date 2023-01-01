//creating a middleware
module.exports= reqFilter = (req,res,next)=>{
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