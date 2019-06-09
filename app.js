const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<center><h1>subdomain takeover By xJohnCode!</h1> </center>');
res.end('<center><img src=x onerror=alert("XSS")><ظcenter>');

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});
