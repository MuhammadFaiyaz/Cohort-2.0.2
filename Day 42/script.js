let h1 = document.querySelector("h1");
let inc = document.querySelector(".inc");
let reset = document.querySelector(".reset");
let dec = document.querySelector(".dec");

let sum = 0;
inc.addEventListener("click", function increase() {
  sum++;
  h1.innerHTML=sum;
});
reset.addEventListener("click", function reset() {
  sum = 0;
  h1.innerHTML=sum;
});
dec.addEventListener("click", function decrease() {
    if(sum>0) sum--;
  h1.innerHTML=sum;
});
