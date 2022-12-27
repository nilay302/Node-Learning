const http = require('http');

//starting server at specific port using http
http.createServer((req,res)=>{
    res.write("Hello there");
    res.end();
}).listen(4500);