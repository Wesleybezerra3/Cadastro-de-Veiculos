
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("animated");
  }, 2000);
  const timer = setTimeout(() => {
    loader.style.display = "none";
  }, 5000);

});