/* Mobile Nav */

const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

navIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  navIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener, "click", closeMenu);

function closeMenu() {
  navIcon.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
}

/* Dropdown on Click */
const dropBtn = document.querySelector(".dropdown-toggle");
const langBtn = document.querySelector(".toggle-lang");
const dropMenu = document.querySelector(".dropdown-menu");
const langMenu = document.querySelector(".lang-menu");

function toggleDropdown() {
  if (dropMenu.classList.contains("active")) {
    dropMenu.classList.remove("active");
  } else {
    dropMenu.classList.add("active");
  }
}

function toggleLang() {
  if (navMenu.classList.contains("active")) {
    langMenu.classList.toggle("active");
  }
}

dropBtn.addEventListener("click", toggleDropdown);
langBtn.addEventListener("click", toggleLang);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const navBar = document.querySelector(".navbar");
var prevScrollPos = window.pageYOffset;
window.onscroll = scrollShowNav;
function scrollShowNav() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-110px";
  }
  prevScrollPos = currentScrollPos;
}
