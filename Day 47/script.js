const users = [
  {
    name: "Yusuf Ali",
    age: 35,
    profession: "Digital Marketer",
    description: "Handles SEO, ads, and growth strategies.",
    salary: 40000,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
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
    name: "Ahmed Raihan",
    age: 30,
    profession: "Software Engineer",
    description: "Builds scalable applications and APIs.",
    salary: 70000,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
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
  {
    name: "Yusuf Ali",
    age: 35,
    profession: "Digital Marketer",
    description: "Handles SEO, ads, and growth strategies.",
    salary: 40000,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const renderCards = (users) => {
  return users
    .map(
      (user) => `
    <div class="card">
      <div class="card-body">
        <div class="avatar-wrap">
          <img src="${user.image}" alt="${user.name}">
        </div>
        <h2>${user.name}</h2>
        <p class="prof">${user.profession}</p>
        <div class="divider"></div>
        <p class="dscrp">${user.description}</p>
        <div class="stats-row">
          <div class="stat">
            <span class="stat-label">Age</span>
            <span class="age">${user.age}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Salary</span>
            <span class="salary">$${user.salary.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
};

const main = document.querySelector("main");
main.innerHTML = renderCards(users);
