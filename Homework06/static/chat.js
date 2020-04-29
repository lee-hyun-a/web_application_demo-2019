$(document).ready(() => {
    $(".input-message input[type=text]").on("keydown", (e) => {
        if (e.keyCode == 13) { // enter
            onEnterMessage();
        }
    });
    addMessage(nick, 0);

});

function onEnterMessage() {
    var message = $(".input-message input[type=text]").val();
    $(".input-message input[type=text]").val("");

    if (message == "/clear") {
        clearMessage();
    } else {
        addMessage(message, 1);
    }
}

//messageType : 0: System, 1: Self, 2: Other
function addMessage(message, messageType = 1) {
    if (message == null || message.trim() == "") return;
    var chatBox = $(".chat-box");

    var newMessage = $(".chat-box .message.template").clone();
    newMessage.removeClass("template");
    newMessage.addClass("new-msg");
    if (messageType == 0) newMessage.addClass("system");
    if (messageType == 1) newMessage.addClass("self");

    chatBox.append(newMessage);

    newMessage.find(".text").text(message);
    newMessage.find(".time").text(moment().format("YYYY/MM/DD HH:mm:ss"));

    var element = chatBox[0];
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

function clearMessage() {

    $(".chat-box .new-msg").remove();
    //$(".chat-box .message:not(.template)").remove();

}

