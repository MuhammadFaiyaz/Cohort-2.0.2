const images = [
  "https://picsum.photos/id/1/800/600",
  "https://picsum.photos/id/2/800/600",
  "https://picsum.photos/id/3/800/600",
  "https://picsum.photos/id/4/800/600",
  "https://picsum.photos/id/5/800/600",
  "https://picsum.photos/id/6/800/600",
  "https://picsum.photos/id/7/800/600",
  "https://picsum.photos/id/8/800/600",
  "https://picsum.photos/id/9/800/600",
  "https://picsum.photos/id/10/800/600",
  "https://picsum.photos/id/11/800/600",
  "https://picsum.photos/id/12/800/600",
  "https://picsum.photos/id/13/800/600",
  "https://picsum.photos/id/14/800/600",
  "https://picsum.photos/id/15/800/600",
  "https://picsum.photos/id/16/800/600",
  "https://picsum.photos/id/17/800/600",
  "https://picsum.photos/id/18/800/600",
  "https://picsum.photos/id/19/800/600",
  "https://picsum.photos/id/20/800/600",
  "https://picsum.photos/id/21/800/600",
  "https://picsum.photos/id/22/800/600",
  "https://picsum.photos/id/23/800/600",
  "https://picsum.photos/id/24/800/600",
  "https://picsum.photos/id/25/800/600",
  "https://picsum.photos/id/26/800/600",
  "https://picsum.photos/id/27/800/600",
  "https://picsum.photos/id/28/800/600",
  "https://picsum.photos/id/29/800/600",
  "https://picsum.photos/id/30/800/600",
  "https://picsum.photos/id/31/800/600",
  "https://picsum.photos/id/32/800/600",
  "https://picsum.photos/id/33/800/600",
  "https://picsum.photos/id/34/800/600",
  "https://picsum.photos/id/35/800/600",
  "https://picsum.photos/id/36/800/600",
  "https://picsum.photos/id/37/800/600",
  "https://picsum.photos/id/38/800/600",
  "https://picsum.photos/id/39/800/600",
  "https://picsum.photos/id/40/800/600",
  "https://picsum.photos/id/41/800/600",
  "https://picsum.photos/id/42/800/600",
  "https://picsum.photos/id/43/800/600",
  "https://picsum.photos/id/44/800/600",
  "https://picsum.photos/id/45/800/600",
  "https://picsum.photos/id/46/800/600",
  "https://picsum.photos/id/47/800/600",
  "https://picsum.photos/id/48/800/600",
  "https://picsum.photos/id/49/800/600",
  "https://picsum.photos/id/50/800/600",
  "https://picsum.photos/id/51/800/600",
  "https://picsum.photos/id/52/800/600",
  "https://picsum.photos/id/53/800/600",
  "https://picsum.photos/id/54/800/600",
  "https://picsum.photos/id/55/800/600",
  "https://picsum.photos/id/56/800/600",
  "https://picsum.photos/id/57/800/600",
  "https://picsum.photos/id/58/800/600",
  "https://picsum.photos/id/59/800/600",
  "https://picsum.photos/id/60/800/600",
  "https://picsum.photos/id/61/800/600",
  "https://picsum.photos/id/62/800/600",
  "https://picsum.photos/id/63/800/600",
  "https://picsum.photos/id/64/800/600",
  "https://picsum.photos/id/65/800/600",
  "https://picsum.photos/id/66/800/600",
  "https://picsum.photos/id/67/800/600",
  "https://picsum.photos/id/68/800/600",
  "https://picsum.photos/id/69/800/600",
  "https://picsum.photos/id/70/800/600",
  "https://picsum.photos/id/71/800/600",
  "https://picsum.photos/id/72/800/600",
  "https://picsum.photos/id/73/800/600",
  "https://picsum.photos/id/74/800/600",
  "https://picsum.photos/id/75/800/600",
  "https://picsum.photos/id/76/800/600",
  "https://picsum.photos/id/77/800/600",
  "https://picsum.photos/id/78/800/600",
  "https://picsum.photos/id/79/800/600",
  "https://picsum.photos/id/80/800/600",
  "https://picsum.photos/id/81/800/600",
  "https://picsum.photos/id/82/800/600",
  "https://picsum.photos/id/83/800/600",
  "https://picsum.photos/id/84/800/600",
  "https://picsum.photos/id/85/800/600",
  "https://picsum.photos/id/86/800/600",
  "https://picsum.photos/id/87/800/600",
  "https://picsum.photos/id/88/800/600",
  "https://picsum.photos/id/89/800/600",
  "https://picsum.photos/id/90/800/600",
  "https://picsum.photos/id/91/800/600",
  "https://picsum.photos/id/92/800/600",
  "https://picsum.photos/id/93/800/600",
  "https://picsum.photos/id/94/800/600",
  "https://picsum.photos/id/95/800/600",
  "https://picsum.photos/id/96/800/600",
  "https://picsum.photos/id/97/800/600",
  "https://picsum.photos/id/98/800/600",
  "https://picsum.photos/id/99/800/600",
  "https://picsum.photos/id/100/800/600",
];

let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let randomIndex = Math.floor(Math.random() * images.length);
  let x = Math.floor(Math.random() * 100)
  let y = Math.floor(Math.random() * 100)
  let rot = Math.floor(Math.random() * 360)
  let rad = Math.floor(Math.random() * 50)


  img.src = images[randomIndex];
  div.appendChild(img);
  main.appendChild(div);

  img.style.backgroundSize = 'cover'
  img.style.backgroundPosition = 'center'
  img.style.width = '100px'
  img.style.height = '100px'
  img.style.height = '100px'
  img.style.borderRadius = rad+'%'

  div.style.position = 'absolute'
  div.style.top = y+'%'
  div.style.left = x+'%'
  div.style.rotate = rot+'deg'


});
