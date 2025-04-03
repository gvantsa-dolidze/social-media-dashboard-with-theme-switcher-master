const body = document.querySelector("body");
const colorToggleBtnText = document.querySelector(".btn-text-color");
const headerTitle = document.querySelector('.header-title');
const colorToggle = document.querySelector(".color-toggle-btn");

colorToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  colorToggleBtnText.classList.toggle("text-color-grey");
  headerTitle.classList.toggle('text-color-black')
});
