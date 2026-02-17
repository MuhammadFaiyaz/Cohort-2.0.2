let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h1 = document.createElement("h1");
let sum = 0;
let total = 20 + Math.floor(Math.random()*100)
btn.addEventListener("click", function () {
  btn.disabled = true;
  btn.style.opacity = "0.6";
  let a = setInterval(() => {
    sum++;
    h2.textContent = sum + "%";
    inner.style.width = sum + "%";
  }, total);

  setTimeout(() => {
    clearInterval(a);
    btn.innerHTML = "Downloaded";
    main.appendChild(h1)
    h1.textContent = `Your file is downloaded in ${total/10} seconds`
    h1.style.fontSize = '20px'
  }, total*100);
});
