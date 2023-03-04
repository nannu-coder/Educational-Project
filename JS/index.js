// const scrollPosition = window.scrollY;
const navbar = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 30) {
    console.log("big");
    navbar.classList.add("bg-cls");
  } else {
    navbar.classList.remove("bg-cls");
  }
});
