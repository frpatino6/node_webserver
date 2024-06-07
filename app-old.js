const http = require('http');

http.createServer((req, res) => {

    // console.log(res);

    // res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('Hola Mundo\n');
    res.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');