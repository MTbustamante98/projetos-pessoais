const btn = document.querySelector(".btn");
const para = document.querySelector("p");

btn.addEventListener("click", () => {
  para.classList.toggle("active");
})