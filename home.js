let logo = document.querySelector(".mhdr img").style
let htext = document.querySelector("main h1").style
let scr = document.addEventListener("scroll", () => {
    let pos = scrollY;
    if (pos > 30) {
        logo.transform = "initial";
        htext.opacity = "1";
        let sz = "" + Math.min((scrollY + 3) / 10, 60) + "px"
        htext.fontSize = sz;
    }
    else {
        logo.transform = "translate(-45vw,50vh) scale(5,5)"
        htext.opacity = "0"
    }
})