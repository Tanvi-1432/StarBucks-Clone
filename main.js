// HAMBURGER

const hamburger = document.querySelector(".hamburger-btn");
// const hamburgerTop = document.querySelector(".top");
// const hamburgerMiddle = document.querySelector(".middle");
// const hamburgerBottom = document.querySelector(".bottom");
const mobileNavigation = document.querySelector(".mobile-navigation");

const menuButton = document.querySelector(".menu-btn");
const goBackMenu = document.querySelector(".menu-title");
const menuContainer = document.querySelector(".menu-container");

// const mainBody = document.querySelector(".primary-content");

const navMask = document.querySelector(".nav-mask");
const body = document.querySelector("body");

// Menu Active Class Remover
function menuActiveClassRemover() {
  menuContainer.classList.remove("menu-container-active");
}

// hamburger animation funtion
function hamburgerAnimation() {
  const isOpened = hamburger.getAttribute("aria-expanded");
  if (isOpened == "false") {
    hamburger.setAttribute("aria-expanded", "true");
  } else {
    hamburger.setAttribute("aria-expanded", "false");
  }
}

// Function To Remove All The Classes that activates for Hamburger
function hamburgerStyleClassRemover() {
  mobileNavigation.classList.remove("mobile-navigation-active");
  menuContainer.classList.remove("menu-container-active");
  navMask.classList.remove("mobile-nav-mask");
  body.classList.remove("scroll-disable");

  //   hamburger animation
  hamburgerAnimation();
}

// Event listener for the hamburger button
hamburger.addEventListener("click", function () {
  mobileNavigation.classList.toggle("mobile-navigation-active");
  menuContainer.classList.remove("menu-container-active");
  navMask.classList.toggle("mobile-nav-mask");
  body.classList.toggle("scroll-disable");

  // hamburger animation
  hamburgerAnimation();
});

//Evetn listener for the menu button
menuButton.addEventListener("click", function () {
  menuContainer.classList.toggle("menu-container-active");
});

// Event listener to remove menu container
goBackMenu.addEventListener("click", menuActiveClassRemover);

// Event listener to remove all the styling when clicked one the background
navMask.addEventListener("click", hamburgerStyleClassRemover);



// FOOTER

const aboutUs = document.querySelector(".about-us-title");
const aboutUsExpander = document.querySelector(".about-us-expander");
const careers = document.querySelector(".careers-title");
const careersExpander = document.querySelector(".careers-expander");
const socialImpact = document.querySelector(".social-impact-title");
const socialImpactExpander = document.querySelector(".social-impact-expander");
const partners = document.querySelector(".partners-title");
const partnersExpander = document.querySelector(".partners-expander");
const order = document.querySelector(".order-title");
const orderExpander = document.querySelector(".order-expander");

const arrowImage_1 = document.querySelector(".arrow-1");
const arrowImage_2 = document.querySelector(".arrow-2");
const arrowImage_3 = document.querySelector(".arrow-3");
const arrowImage_4 = document.querySelector(".arrow-4");
const arrowImage_5 = document.querySelector(".arrow-5");

// arrow rotater and expander on footer navigation

aboutUs.addEventListener("click", function () {
  aboutUsExpander.classList.toggle("expander-active");
  arrowImage_1.classList.toggle("arrow-rotater");
});

careers.addEventListener("click", function () {
  careersExpander.classList.toggle("expander-active");
  arrowImage_2.classList.toggle("arrow-rotater");
});

socialImpact.addEventListener("click", function () {
  socialImpactExpander.classList.toggle("expander-active");
  arrowImage_3.classList.toggle("arrow-rotater");
});

partners.addEventListener("click", function () {
  partnersExpander.classList.toggle("expander-active");
  arrowImage_4.classList.toggle("arrow-rotater");
});

order.addEventListener("click", function () {
  orderExpander.classList.toggle("expander-active");
  arrowImage_5.classList.toggle("arrow-rotater");
});

// animation prevention on page load
setTimeout(function () {
  document.body.className = "";
}, 500);
