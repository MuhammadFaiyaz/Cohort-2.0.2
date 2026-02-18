let main = document.querySelector("main");
let card = document.querySelector(".card");
let icon = document.querySelector("i");
let img = document.querySelector("img");

let animating = false;

img.addEventListener("click", function () {
  if (animating) return;
  animating = true;
  icon.style.opacity = "1";
  icon.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -500%) rotate(0deg) scale(1)";
  }, 600);
  setTimeout(() => {
    icon.style.opacity = "0";
    icon.style.transform = "translate(-50%, -50%) rotate(-45deg) scale(0)";
    animating = false
  }, 1100);
});
