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
        addMessage(message);
    }
}

function addMessage(message) {
    var chatBox = $(".chat-box");

    var newMessage = $(".chat-box .message.template").clone();
    newMessage.removeClass("template");
    newMessage.addClass("new-msg");

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

