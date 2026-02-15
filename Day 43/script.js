const winner = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    captain: "MS Dhoni",
    trophies: 5,
    primary: "yellow",
    secondary: "blue",
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bangalore",
    captain: "Faf du Plessis",
    trophies: 0,
    primary: "red",
    secondary: "black",
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    captain: "Hardik Pandya",
    trophies: 5,
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    trophies: 2,
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    trophies: 1,
    primary: "orange",
    secondary: "black",
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    captain: "Shikhar Dhawan",
    trophies: 0,
    primary: "crimson",
    secondary: "silver",
  },
];
let h1 = document.querySelector("h1");
let fn = document.querySelector(".fn");
let capt = document.querySelector(".capt");
let trphy = document.querySelector(".trphy");
let btn = document.querySelector("button");
let body = document.querySelector('body')
let section = document.querySelector('section')
btn.addEventListener("click", function () {
  let arr = Math.floor(Math.random() * winner.length);
  h1.innerHTML = winner[arr].team
  fn.innerHTML = winner[arr].fullName
  capt.innerHTML = winner[arr].captain
  trphy.innerHTML = winner[arr].trophies
  body.style.background = `${winner[arr].primary}`
  section.style.background = `${winner[arr].secondary}`
});
