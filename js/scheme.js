const html = document.querySelector("html");
const btn = document.querySelector("#scheme-toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
