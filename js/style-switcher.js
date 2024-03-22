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

//For change the theme color

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
