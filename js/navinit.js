const nav = document.getElementById("navit");
let lastScrollY = window.scrollY;
window.addEventListener("scroll",()=>{
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hide");
    } else {
        nav.classList.remove("nav--hide");
    }
    lastScrollY=window.scrollY;
});