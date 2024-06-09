const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus(); // Make it open and focus
})

input.addEventListener("blur", () => {
    search.classList.toggle("active");
})