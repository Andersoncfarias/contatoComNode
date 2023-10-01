let http = require('http');

http.createServer(function(req, res){
    res.end('hello world, welcome to my website')
}).listen(3000);

console.log('servidor rodando')