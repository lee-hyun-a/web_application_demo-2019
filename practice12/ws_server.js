const http = require("http");
var WebSocketServer = require('websocket').server;
const redis = require("redis");

const httpServer = http.createServer();
const client = redis.createClient();

const wsServer = new WebSocketServer({
    httpServer: httpServer,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

var rooms = {};
wsServer.on('request', function(request) {
    console.log("on Request");
    var connection = request.accept(null, request.origin);
    connection.on('message', function(message) {
        //console.log(message);
        var room = message.utf8Data;
        connection.room = room;
        var connections = rooms[room];
        if (connections == null) {
            connections = [];
            rooms[room] = connections;
        }
        console.log("assign connection to " + room);
        connections.push(connection);
    });
    connection.on("close", function() {
        var connections = rooms[connection.room];
        if (connections == null) return;
        var i = connections.indexOf(connection);
        connections.splice(i, 1);
        console.log("close");
    });

    connection.send("check");

});

httpServer.listen(8888);

client.on("message", (channel, room) => {
    console.log("on message", room);
    //wsServer.connections.forEach(c => c.send("check"));
    var connections = rooms[room];
    if (connections == null) connections = [];
    console.log("send message to " + connections.length + " connections");
    connections.forEach(c => c.send("check"));
});

client.subscribe("MESSAGE"); 

console.log("hello world");