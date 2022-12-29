const http = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);