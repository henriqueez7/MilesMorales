const hamb = document.getElementById("mobile-menu");
const menu = document.getElementById("list");
const closeIcon = document.getElementById("mobile-menu");

hamb.addEventListener("click", () => {
    console.log("cliquei no menu");
    menu.classList.toggle("active");
    closeIcon.classList.toggle("active");
});