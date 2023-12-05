function getAndSetAttributes() {
    const message1 = document.getElementById("message1");
    message1.setAttribute("class", "hidden");
    const message = document.getElementById("message");
    message.setAttribute("class", "hidden");
}

window.onload = function () {
    let button = document.querySelector("button");
    button.onclick = function (event) {
        event.preventDefault();
        getAndSetAttributes();
        message.removeAttribute("class");
        message1.removeAttribute("class");
    };
    let myNameDelayed = document.getElementById("myNameDelay");
    function myNameDelay() {
        myNameDelayed.innerText = "Hi, I'm Rosemary Ojwang";
    }
    setTimeout(myNameDelay, 500);
    let myJob1 = document.getElementById("myJob1");
    function myJob1Delay() {
        myJob1.innerText = "Full Stack Web Developer";
    }
    setTimeout(myJob1Delay, 2000);
    let myJob2 = document.getElementById("myJob2");
    function myJob2Delay() {
        myJob2.innerText = "UX/UI Developer";
    }
    setTimeout(myJob2Delay, 3500);
}