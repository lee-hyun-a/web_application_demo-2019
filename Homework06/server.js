var moment = require("moment");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended : true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/", (request, response) => {
    response.render("index", { time: moment().format("YYYY/MM/DD HH:mm:ss") });
});

app.post("/", (request, response) => {
    //response.send("Hello test");
    console.log(request.body);
    response.render("chat", { nick : request.body.nick });
});

app.listen(8080); 

console.log("hello world");