// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector("#menu-container");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  // Do something else, like open/close menu
});
menu.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});