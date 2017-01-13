let http = require('http');
let url = require('url');

var server = http.createServer( (req, res) => {
	console.log(new Date(), "request: ", req.url)
	let uri = url.parse(req.url, true)
	let timeout = uri.query.timeout || uri.query.t || 500
	setTimeout(function(){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    	res.end('{"status":"ok"}')
	}, timeout)
});

server.listen(4000, function() {
	console.log("Listening 4000...")
});