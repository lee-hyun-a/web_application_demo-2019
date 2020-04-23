
const http = require("http");

var app = http.createServer((request, response) => {
    console.log("Call", request.url);
    if (request.url == "/index.html") {
        response.writeHead(200);
        response.end("<html><body style='color:red'>Hello Index</body></html>");
        return;
    } else if (request.url == "/test") {
        response.writeHead(200);
        response.end("<html><body>Hello Test</body></html>");
        return;
    }

    response.writeHead(404);
    response.end();
});

app.listen(8080);

console.log("hello world");