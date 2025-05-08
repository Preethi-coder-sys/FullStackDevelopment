const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === "/home") {
        res.end("Welcome to the Home Page");
    } else if (req.url === "/about") {
        res.end("This is the About Page");
    } else {
        res.end("Hello, World!");
    }
});

server.listen(3000, () => {
    console.log("Server is running: http://localhost:3000");
});
