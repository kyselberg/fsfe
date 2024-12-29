const http = require('http');

const server = http.createServer((req,res) =>{
res.write('Almoast there');
	res.end();
})

server.listen(3000);
console.log('server is listening');
