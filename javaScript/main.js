const navButton = document.getElementById("ham-button");
const navMenu = document.getElementById("nav-menu");
navButton.addEventListener("click", navToggle);
function navToggle() {
  console.log("Clicked Event Activated");
  if (navButton.classList.contains("opened")) {
    console.log("Removed from Clicked");
    navMenu.classList.remove("flex");
    navMenu.classList.add("hidden");
    navButton.classList.remove("opened");
  } else {
    console.log("Added from Clicked");
    navMenu.classList.add("flex");
    navMenu.classList.remove("hidden");
    navButton.classList.add("opened");
  }
}
const mybutton = document.getElementById("btn-back-to-top");
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);
