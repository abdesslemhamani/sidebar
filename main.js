const sidebar = document.querySelector(".sidebar");
const bars = document.querySelector(".fa-bars");
const closeButton = document.querySelector(".fa-times");

bars.addEventListener("click",() => {
    sidebar.classList.toggle("show-sidebar");
});
closeButton.addEventListener("click",() => {
 sidebar.classList.remove("show-sidebar");
});