
$(document).ready(() => {
    $(".input-message input[type=text]").on("keydown", (e) => {
        if (e.keyCode == 13) { // enter
            onEnterMessage();
        }
    });
});

function onEnterMessage() {
    var message = $(".input-message input[type=text]").val();
    $(".input-message input[type=text]").val("");

    if (message == "/clear") {
        clearMessage();
    } else {
        //addMessage(message, 1);

        sendMessage(message);
    }
}

//messageType : 0: System, 1: Self, 2: Other
function addMessage(data) {
    var message = data.message;
    var messageType = 2;
    if (data.nick == nick) messageType = 1;
    var date = parseInt(data.date, 10);

    if (message == null || message.trim() == "") return;
    var chatBox = $(".chat-box");

    var newMessage = $(".chat-box .message.template").clone();
    newMessage.removeClass("template");
    newMessage.addClass("new-msg");
    if (messageType == 0) newMessage.addClass("system");
    if (messageType == 1) newMessage.addClass("self");

    chatBox.append(newMessage);

    newMessage.attr("date", date);
    newMessage.find("img").attr("src", "https://via.placeholder.com/100x100.png?text=" + data.nick);
    newMessage.find(".text").text(message);
    newMessage.find(".time").text(moment(date).format("YYYY/MM/DD HH:mm:ss"));

    var element = chatBox[0];
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

function clearMessage() {

    $(".chat-box .new-msg").remove();
    //$(".chat-box .message:not(.template)").remove();

}

var nick = null, room = null;
function onEnterRoom() { // 입장
    nick = $("[name='nick']").val();
    room = $("[name='room']").val();
    if (nick == null || nick == "") return alert("Enter Nick");
    if (room == null || room == "") return alert("Enter Room");
    console.log("on Enter", nick, room);

    $("#enter").hide();
    $("#chat-window").show();
    //addMessage(null, nick, new Date().getTime(), 0);
    connectWebSocket();
}

function sendMessage(message) {
    fetch("/api/send", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nick: nick,
            room: room,
            message: message
        })
    }).then((res) => {
        console.log(res);
        //pullMessages();
    });

}

function loadMessages() {
    fetch("/api/messages", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            room: room
        })
    })
    .then(response => response.json())
    .then(messages => {
        messages.forEach(data => {
            //let type = data.nick == nick ? 1 : 2;
            addMessage(data);
        });
    });
}

function pullMessages() {
    var messages = $(".message:not(.system)[date]");
    if (messages.length == 0) return loadMessages();
    var lastMessage = messages.last();

    var date = lastMessage.attr("date");

    fetch("/api/pull", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date,
            room: room
        })
    })
    .then(response => response.json())
    .then(messages => {
        messages.forEach(data => {
            //let type = data.nick == nick ? 1 : 2;
            addMessage(data);
        });
    });
}

var ws = null;
function connectWebSocket() {
    if (ws != null) {
        try {
            ws.close();
        } catch (e) {}
    }
    ws = new WebSocket("ws://127.0.0.1:8888");
    ws.onclose = () => {
        setTimeout(connectWebSocket, 1000);
    };
    ws.onmessage = (message) => {
        pullMessages();
    };
    //ws.send(room);
    ws.onopen = () => {
        ws.send(room);
    };
}