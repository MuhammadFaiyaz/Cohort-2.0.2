let h6 = document.querySelector("h6");
let btn = document.querySelector("button");
let flag = false;
btn.addEventListener("click", function () {
  if (flag === false) {
    h6.style.color = "#207e4a";
    h6.innerHTML = "Friends";
    btn.innerHTML = 'Remove'
    btn.style.backgroundColor  = '#657e20'
    btn.style.color  = '#ffffff'
    flag = true
  } else {
    h6.style.color = "#ddbd0a";
    h6.innerHTML = "Not friends";
    btn.innerHTML = 'Add Friend'
    btn.style.backgroundColor  = '#ddbd0a'
    btn.style.color  = '#000000'
    flag = false
  }
});
