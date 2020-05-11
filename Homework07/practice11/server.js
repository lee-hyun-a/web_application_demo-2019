const moment = require("moment");
const express = require("express");
var WebSocketServer = require('websocket').server;
const app = express();
const http = require("http");


const httpServer = http.createServer(app);

const wsServer = new WebSocketServer({
    httpServer: httpServer,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

wsServer.on('request', function(request) {
    console.log("on Request");
    var connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
        console.log(message);
    });

    connection.send("check");

});


const messages =  [];

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/", (request, response) => {
    response.render("index", { time: moment().format("YYYY/MM/DD HH:mm:ss").toString() });
});

app.post("/api/send", (req, res) => {
    console.log("api test", req.body.nick, req.body.message);

    messages.push({
        date: new Date().getTime(),
        nick: req.body.nick,
        message: req.body.message
    })

    res.json({});

    wsServer.connections.forEach(c => c.send("check"));
    
});

app.get("/api/messages", (req, res) => {
    res.json(messages);
});

app.post("/api/pull", (req, res) => {
    var newMessages = messages.filter(data => data.date > req.body.date);
    res.json(messages);
})

// app.post("/", (request, response) => {
//     //response.send("Hello test");
//     console.log(request.body);
//     response.render("chat", { nick : request.body.nick });
// });

httpServer.listen(8080)
//app.listen(8080); 

console.log("hello world");