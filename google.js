window.onkeyup = keyup;
var inputTextValue;

function keyup(e) {
    inputTextValue = e.target.value;
    if (e.keyCode == 13) {
        window.location = "https://duckduckgo.com/?q=" + inputTextValue;
    }
}
