const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><strong>Hello World</strong></body></html>');
        res.end();
    }
})

server.listen(3000);

console.log("Server is running on port 3000");