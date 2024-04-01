const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hams = document.querySelectorAll(".ham");
const hlinks = document.querySelectorAll(".hLink");
const bod = document.querySelector("body");
const moon = document.querySelector("#moon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hams.forEach((ham) => {
    ham.classList.toggle("bg-white");
  });
});

hlinks.forEach((hlink) => {
  hlink.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hams.forEach((ham) => {
      ham.classList.toggle("bg-white");
    });
  });
});

moon.addEventListener("click", () => {
  bod.classList.toggle("dark");
});
