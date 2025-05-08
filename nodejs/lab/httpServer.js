const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end("Hello Http server");
});

server.listen('5000', () => {
    console.log("server is running at http://localhost:5000/")
});