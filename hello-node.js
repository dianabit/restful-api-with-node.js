var http = require('http');
var port = 8180;

function handle_response(request, response) {
    response.writeHead(200, {
        'Content-type' : 'text/plain'
    });

    response.end('Hello, world. Are you restless to go restful?');
    console.log('hello_node was requested');
}

http.createServer(handle_response).listen(port, '127.0.0.1');
console.log('Started Node.js http server at http://127.0.0.1:' + port);