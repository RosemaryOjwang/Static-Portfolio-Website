const message1 = document.getElementById("message1");
message1.setAttribute("class", "hidden");
const message = document.getElementById("message");
message.setAttribute("class", "hidden");

window.onload = function()  {
    let button = document.querySelecto("button");
    button.onclick = function(event)    {
        event.delayDefault();
       let message1D= document.querySelector("#message1");
       let messageD = document.querySelector("#message");
       message.removeAttribute("class");
       message1.removeAttribute("class");
    };
}