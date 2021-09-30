function hideLast() {
    document.getElementById("initial").style.display = "none";
}
function hideFirst() {
    let top = document.getElementById("initial").style;
    top.opacity = "0";
    window.setTimeout(hideLast, 1500);
}
function login() {
    if (document.getElementById("userid").value.length == 0 || document.getElementById("pass").value.length==0) {
        alert("enter you password")
        return
    }
    var circle = "<div style='border:2px solid red;border-color:blue transparent transparent transparent;width:30px ;height:30px;margin:auto;border-radius:50%;animation:rotateColor 1s ease-in-out infinite forwards;'></div>";
    document.getElementById("btnli").innerHTML = circle;
    setTimeout(locate, 2500);
}
function locate() {
    document.location = "home.html";
}
