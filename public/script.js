"use strict";
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const welcome = document.querySelector(".welcome");

const homeButtons = document.querySelectorAll(".homeButton");
const aboutButtons = document.querySelectorAll(".aboutButton");
const projectsButtons = document.querySelectorAll(".projectsButton");
const contactButtons = document.querySelectorAll(".contactButton");

const background = document.querySelector(".background");
const scroll = document.querySelector(".projectsContainer");

goToHome();

window.addEventListener("load", () => {
  setTimeout(() => {
    welcome.classList.add("hidden");
  }, 2500);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    welcome.remove();
  }, 2800);
});

// functions
homeButtons.forEach((button) => {
  button.addEventListener("click", goToHome);
});
aboutButtons.forEach((button) => {
  button.addEventListener("click", goToAbout);
});
projectsButtons.forEach((button) => {
  button.addEventListener("click", goToProjects);
});
contactButtons.forEach((button) => {
  button.addEventListener("click", goToContact);
});

function goToHome() {
  removeMovementClasses();
  background.classList.add("bg1");
  home.classList.add("move0");
  about.classList.add("move1");
  projects.classList.add("move1");
  contact.classList.add("move1");
}
function goToAbout() {
  removeMovementClasses();
  background.classList.add("bg2");
  home.classList.add("move-1");
  about.classList.add("move0");
  projects.classList.add("move1");
  contact.classList.add("move1");
}
function goToProjects() {
  removeMovementClasses();
  background.classList.add("bg3");
  home.classList.add("move-1");
  about.classList.add("move-1");
  projects.classList.add("move0");
  contact.classList.add("move1");
}
function goToContact() {
  removeMovementClasses();
  background.classList.add("bg4");
  home.classList.add("move-1");
  about.classList.add("move-1");
  projects.classList.add("move-1");
  contact.classList.add("move0");
}

// other functions
function removeMovementClasses() {
  background.classList.remove("bg1", "bg2", "bg3", "bg4");
  home.classList.remove("move0", "move-1", "move1");
  about.classList.remove("move0", "move-1", "move1");
  projects.classList.remove("move0", "move-1", "move1");
  contact.classList.remove("move0", "move-1", "move1");
}
