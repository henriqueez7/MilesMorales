const hamb = document.getElementById("mobile-menu");
const menu = document.getElementById("list");

hamb.addEventListener("click", () => {
    console.log("cliquei no menu")
    menu.classList.toggle("active")
})