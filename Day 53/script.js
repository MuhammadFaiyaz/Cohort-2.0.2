let p = document.querySelector("p");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text = p.innerText;

function randomText(iteration) {
  return text
    .split("")
    .map((char, index) => {
      if (index < iteration) return char;
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");
}

p.addEventListener("mouseenter", function () {
  let iteration = 0;
  let interval = setInterval(() => {
    let str = randomText(iteration);
    p.innerText = str;
    if (iteration >= text.length) clearInterval(interval);
    iteration += 0.2;
  }, 30);
});
