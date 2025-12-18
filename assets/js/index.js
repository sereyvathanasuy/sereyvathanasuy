const profileInfo = {
  phone_number: "+855-969-192-938",
  email: "suysereyvathana@gmail.com",
  facebookUrl: "https://web.facebook.com/sereyvathanasuy",
  linkedUrl: "https://www.linkedin.com/in/suy-sereyvathana-bb89b1233",
  githubUrl: "https://github.com/sereyvathanasuy",
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

const gitJournalings = [
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
];

const educations = [
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
];

const researchs = [
  {
    year: "Mar 2023",
    title: "LBE - Plagiarism Detection",
    subTitle: "Plagiarism Detection System for Khmer Language.",
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

  // #region Git Journaling

  let gitJournaling = document.getElementById("git-journaling");

  gitJournalings.forEach((it) => {
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

  educations.forEach((it) => {
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

  researchs.forEach((it) => {
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
