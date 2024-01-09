import * as clipboard from "clipboard-polyfill";

var copy = document.getElementById("copy")
var message = document.getElementById("mss")

copy.addEventListener("click", () => {
    clipboard.writeText("david.s4mura1@gmail.com")
    message.style.opacity = "1"
    message.style.visibility = "visible"
    setTimeout(() => {
     message.style.opacity = "0";
    message.style.visibility = "hidden";
    }, 3000 )
    
})
