// =================menu bar=====================

const menuBtn = document.getElementById("menu-bar");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})