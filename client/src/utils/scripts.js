const mobileNav = document.querySelector(".mobile-nav");

const navToggler = document.getElementById("front-nav-toggler");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("text-light");
  mobileNav.classList.toggle("open");
});
