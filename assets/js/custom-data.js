const profileInfo = {
  webSiteTitle: "Thana.dev",
  phone_number: "+855-969-192-938",
  email: "suysereyvathana@gmail.com",
  address:
    "156 Kampong Sambuor, Samraong Knong, Aek Pnhom, Battambang, Cambodia",
  facebookUrl: "https://web.facebook.com/sereyvathanasuy",
  linkedUrl: "https://www.linkedin.com/in/suy-sereyvathana-bb89b1233",
  githubUrl: "https://github.com/sereyvathanasuy",
  skills: [
    {
      title: "Front-End",
      description: "HTML, CSS, Javascript, Tailwind, Vuejs, Vuetify",
    },
    {
      title: "Back-End",
      description:
        "Golang (Gin), PHP (Laravel), C# (ASP.Net), Python (Fast API)",
    },
    {
      title: "Database",
      description: "MySQL, PostgreSQL, MongoDB",
    },
    {
      title: "Tools & Platforms",
      description: "Git, Docker",
    },
    {
      title: "Others",
      description: "RESTful APIs",
    },
  ],
  educations: [
    {
      year: "2020-2024",
      title: "University",
      subTitle:
        "Completed Bachelor’s Degree in Information Technology at National University of Battambang",
    },
    {
      year: "2017-2020",
      title: "High School",
      subTitle: "Completed at Kdol Doun Teav High School",
    },
    {
      year: "2014-2017",
      title: "Secondary School",
      subTitle: "Completed at Kdol Doun Teav Secondary School",
    },
    {
      year: "2008-2014",
      title: "Primary School",
      subTitle: "Completed at Norea Primary School",
    },
  ],
  researchs: [
    {
      year: "Mar 2023",
      title: "LBE - Plagiarism Detection",
      subTitle: "Plagiarism Detection System for Khmer Language.",
    },
  ],
  gitJournalings: [
    {
      date: "17 Dec 2025",
      title: "Parking Management System App",
    },
    {
      date: "15 Aug 2025",
      title: "Student Management System",
    },
    {
      date: "14 Jun 2025",
      title: "Ice Factory Management System",
    },
    {
      date: "05 Jan 2025",
      title: "Accounting, HR, CRM, POS Management System",
    },
    {
      date: "10 Mar 2023",
      title: "Construction Depot Management System",
    },
  ],
};

const allMenus = [
  {
    title: "About Me",
    link: "about",
  },
  {
    title: "Resume",
    link: "resume",
  },
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const allExternalLinks = [
  {
    icon: "ri-facebook-circle-fill",
    link: profileInfo.facebookUrl,
  },
  {
    icon: "ri-linkedin-fill",
    link: profileInfo.linkedUrl,
  },
  {
    icon: "ri-github-fill",
    link: profileInfo.githubUrl,
  },
];

const programmingIcons = [
  { title: "Firebase", imagePath: "assets/imgs/home-page-2/hero-1/icon-1.svg" },
  { title: "MongoDB", imagePath: "assets/imgs/home-page-2/hero-1/icon-2.svg" },
  {
    title: "Postgresql",
    imagePath: "assets/imgs/home-page-2/hero-1/icon-3.svg",
  },
  { title: "Mariadb", imagePath: "assets/imgs/home-page-2/hero-1/icon-4.svg" },
  { title: "Mysql", imagePath: "assets/imgs/home-page-2/hero-1/icon-5.svg" },
  { title: "NodeJS", imagePath: "assets/imgs/home-page-2/hero-1/icon-6.svg" },
  { title: "Tailwind", imagePath: "assets/imgs/home-page-2/hero-1/icon-7.svg" },
  { title: "Vuejs", imagePath: "assets/imgs/home-page-2/hero-1/icon-8.svg" },
  { title: "Laravel", imagePath: "assets/imgs/home-page-2/hero-1/icon-9.svg" },
  { title: "C#", imagePath: "assets/imgs/home-page-2/hero-1/icon-10.svg" },
  { title: "Dart", imagePath: "assets/imgs/home-page-2/hero-1/icon-11.svg" },
  { title: "Flutter", imagePath: "assets/imgs/home-page-2/hero-1/icon-12.svg" },
  { title: "Golang", imagePath: "assets/imgs/home-page-2/hero-1/icon-13.svg" },
  { title: "NuxtJS", imagePath: "assets/imgs/home-page-2/hero-1/icon-14.svg" },
];

const cooperationSolutions = [
  {
    icon: "",
    title: "Web & App Development",
    description: "",
  },
  {
    icon: "",
    title: "Database Management",
    description: "",
  },
  {
    icon: "",
    title: "API Development",
    description: "",
  },
  {
    icon: "",
    title: "Performance Optimization",
    description: "",
  },
  {
    icon: "",
    title: "E-commerce Solutions",
    description: "",
  },
  {
    icon: "",
    title: "Integrating AI",
    description: "",
  },
];

function loadMain() {
  // #region Menu
  let navbarMenus = document.getElementById("navbar-menu");
  let mobileNavbarMenu = document.getElementById("mobile-navbar-menu");
  let footerMenus = document.getElementById("footer-menu");

  allMenus.forEach((it) => {
    navbarMenus.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active" href="#${it.link}">${it.title}</a>
        </li>
    `;

    mobileNavbarMenu.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="#${it.link}">${it.title}</a>
        </li>
    `;

    footerMenus.innerHTML += `
        <a href="#${it.link}" class="fs-6">${it.title}</a>
    `;
  });

  // #region Phone Number

  let webSiteTitle = document.getElementsByClassName("website-title");

  Array.from(webSiteTitle).forEach((it) => {
    it.innerHTML = profileInfo.webSiteTitle;
  });

  // #region Phone Number

  let phoneNumber = document.getElementsByClassName("phone_number");

  Array.from(phoneNumber).forEach((it) => {
    it.innerHTML = profileInfo.phone_number;
  });

  // #region Email

  let emails = document.getElementsByClassName("email");

  Array.from(emails).forEach((it) => {
    it.innerHTML = profileInfo.email;
  });

  // #region Address

  let address = document.getElementsByClassName("address");

  Array.from(address).forEach((it) => {
    it.innerHTML = profileInfo.address;
  });

  // #region List Programming Icon

  let listProgrammingIcon = document.getElementById("list-programming-icon");

  programmingIcons.forEach((it) => {
    listProgrammingIcon.innerHTML += `
      <li class="carouselTicker__item">
        <a
          class="brand-logo icon_60 icon-shape rounded-3"
        >
          <img
            src="${it.imagePath}"
            alt="${it.title}"
          />
        </a>
      </li>
    `;
  });

  // #region Git Journaling

  let gitJournaling = document.getElementById("git-journaling");

  profileInfo.gitJournalings.forEach((it) => {
    gitJournaling.innerHTML += `
        <li class="position-relative z-1">
            <div class="d-flex align-items-center gap-2">
            <p class="text-300 text-nowrap">${it.date}:</p>
            <span class="text-dark"
                >${it.title}</span
            >
            </div>
        </li>
    `;
  });

  // #region Education List

  let educationList = document.getElementById("education-list");

  profileInfo.educations.forEach((it) => {
    educationList.innerHTML += `
        <li class="position-relative z-1 mb-3">
            <div class="d-flex gap-2">
                <p class="text-300 text-nowrap fw-regular mb-0">
                ${it.year}:
                </p>
                <div>
                <span class="text-primary-2"
                    >${it.title}</span
                >
                <p class="text-dark">
                    ${it.subTitle}
                </p>
                </div>
            </div>
        </li>
    `;
  });

  // #region Research List

  let researchList = document.getElementById("research-list");

  profileInfo.researchs.forEach((it) => {
    researchList.innerHTML += `
        <li class="position-relative z-1 mb-3">
            <div class="d-flex gap-2">
            <p class="text-300 text-nowrap fw-regular mb-0">
                ${it.year}:
            </p>
            <div>
                <span class="text-primary-2"
                >${it.title}</span
                >
                <p class="text-dark">
                    ${it.subTitle}
                </p>
            </div>
            </div>
        </li>
    `;
  });

  // #region All Skill

  let allSkill = document.getElementById("all-skill");

  profileInfo.skills.forEach((it) => {
    allSkill.innerHTML += `
      <li class="mb-3">
        <div
          class="d-flex flex-column flex-md-row gap-2"
        >
          <p class="text-dark text-nowrap mb-0">
            ${it.title}:
          </p>
          <span class="text-300">${it.description}</span>
        </div>
      </li>
    `;
  });

  // #region Footer Menu

  let navbarExternalLink = document.getElementById("navbar-external-link");
  let ofMenuExternalLink = document.getElementById("off-menu-external-link");
  let footerExternalLink = document.getElementById("footer-external-link");

  allExternalLinks.forEach((it) => {
    navbarExternalLink.innerHTML += `
        <a href="${it.link}">
            <i class="${it.icon} fs-18"></i>
        </a>
    `;

    ofMenuExternalLink.innerHTML += `
        <a href="${it.link}">
            <i class="${it.icon} fs-18"></i>
        </a>
    `;

    footerExternalLink.innerHTML += `
        <a href="${it.link}">
            <i class="${it.icon} fs-18"></i>
        </a>
    `;
  });
}

loadMain();
