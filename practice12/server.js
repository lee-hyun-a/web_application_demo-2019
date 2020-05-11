const moment = require("moment");
const express = require("express");
const app = express();
const http = require("http");
const mysql = require("mysql");
const redis = require("redis");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'test',
    database: 'test',
    insecureAuth: true,
    port: 3309
});

const client = redis.createClient();

const httpServer = http.createServer(app);

//const AllMessages = {};

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/", (request, response) => {
    response.render("index", { time: moment().format("YYYY/MM/DD HH:mm:ss").toString() });
});

app.post("/api/send", (req, res) => {
    console.log("api test", req.body.room, req.body.nick, req.body.message);
    // var messages = AllMessages[req.body.room];
    // if (messages == null) {
    //     messages = [];
    //     AllMessages[req.body.room] = messages;
    // }

    // messages.push({
    //     date: new Date().getTime(),
    //     room : req.body.room,
    //     nick: req.body.nick,
    //     message: req.body.message
    // })
    connection.query("INSERT INTO messages (nick, room, message, `date`) VALUES (?, ?, ?, ?)",
        [req.body.nick, req.body.room, req.body.message, new Date().getTime()], () => {     // DB에 넣는 작업

        res.json({});

        //wsServer.connections.forEach(c => c.send("check"));
        client.publish("MESSAGE", req.body.room);
    });
});

app.post("/api/messages", (req, res) => {
    // var messages = AllMessages[req.body.room];
    // if (messages == null) messages = [];
    // //var newMessages = messages.filter(data => data.room == req.body.room);
    // res.json(messages);

    connection.query("SELECT * FROM messages WHERE room = ? ORDER BY id ASC", [ req.body.room ], (err, rows) => {
        console.log(err,rows);
        res.json(rows);
    });
}); 

app.post("/api/pull", (req, res) => {
    // var messages = AllMessages[req.body.room];
    // if (messages == null) messages = [];
    // var newMessages = messages.filter(data => data.date > req.body.date);
    // res.json(newMessages);

    connection.query("SELECT * FROM messages WHERE room = ? AND `date` > ? ORDER BY id ASC", [ req.body.room, req.body.date ],
     (err, rows) => {
        console.log(err,rows);
        res.json(rows);
    });
});

// app.post("/", (request, response) => {
//     //response.send("Hello test");
//     console.log(request.body);
//     response.render("chat", { nick : request.body.nick });
// });

httpServer.listen(8080)

//app.listen(8080); 

console.log("hello world");