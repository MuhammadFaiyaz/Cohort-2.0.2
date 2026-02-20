const users = [
  {
    name: "Muhammad",
    age: 25,
    profession: "Web Developer",
    description: "Frontend and backend development.",
    salary: 50000,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Ahmed Raihan",
    age: 30,
    profession: "Software Engineer",
    description: "Builds scalable applications and APIs.",
    salary: 70000,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Muhammad",
    age: 25,
    profession: "Web Developer",
    description: "Frontend and backend development.",
    salary: 50000,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Ahmed Raihan",
    age: 30,
    profession: "Software Engineer",
    description: "Builds scalable applications and APIs.",
    salary: 70000,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Muhammad",
    age: 25,
    profession: "Web Developer",
    description: "Frontend and backend development.",
    salary: 50000,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Ahmed Raihan",
    age: 30,
    profession: "Software Engineer",
    description: "Builds scalable applications and APIs.",
    salary: 70000,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Omar Faruk",
    age: 28,
    profession: "UI/UX Designer",
    description: "Designs clean and user-friendly interfaces.",
    salary: 45000,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Yusuf Ali",
    age: 35,
    profession: "Digital Marketer",
    description: "Handles SEO, ads, and growth strategies.",
    salary: 40000,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Hasan Mahmud",
    age: 22,
    profession: "Content Writer",
    description: "Writes blogs and technical documentation.",
    salary: 30000,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];


let sum= ''
users.forEach((user) => {
  sum += `<div class="card">
  <img src=${user.image} alt="">
            <h2>${user.name}</h2>
            <p class="prof">${user.profession}</p>
            <p class="dscrp">${user.description}</p>
            <p class="age">Age: ${user.age}</p>
            <p class="salary">Salary: ${user.salary}</p>
            </div>`;
});

    let main = document.querySelector("main");
    main.innerHTML = sum