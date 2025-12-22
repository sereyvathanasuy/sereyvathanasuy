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

  // #region Cooperation Solution

  let cooperationSolution = document.getElementById(
    "list-cooperation-solution"
  );

  cooperationSolutions.forEach((it) => {
    cooperationSolution.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="card-servies-2 rounded-2 h-100 hover-up">
          ${it.icon}
          <h6 class="my-3 fw-medium">${it.title}</h6>
          ${it.description}
        </div>
      </div>
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
