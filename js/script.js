function setActiveStyle(color) {
  document.documentElement.style.setProperty(
    "--primary-color",
    getComputedStyle(document.querySelector(`.${color}`)).backgroundColor
  );
}

document.querySelector(".style-switcher-toggler").onclick = () => {
  document.querySelector(".style-switcher").classList.toggle("active");
};

// Function to close the style switcher when scrolling
function closeStyleSwitcher() {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher.classList.contains("active")) {
    styleSwitcher.classList.remove("active");
  }
}

// Listen for scroll events on the window
window.addEventListener("scroll", closeStyleSwitcher);

// Function to toggle dark theme and change icon
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  // Toggle icon between sun and moon
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
};

/*===============typing animation============*/
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Graphics", "Web Developer", "YouTuber"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});
/*===============Aside========*/

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
/*===============Hire me ========*/
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
