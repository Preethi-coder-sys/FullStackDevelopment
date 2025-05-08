const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    if (req.url == '/') {
        res.write("Hello <b>Http</b>")
    }

    else if (req.url == '/js') {
        res.write("Hello <b>Javascript</b>")
    }

    else if (req.url == '/css') {
        res.write("Hello <b>CSS</b>")
    }


    res.end();
})

server.listen('4000', () => {
    console.log('server started in 4000')
})