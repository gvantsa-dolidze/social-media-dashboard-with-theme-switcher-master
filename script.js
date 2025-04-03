const body = document.querySelector("body");
const btn = document.querySelector(".color-toggle-btn");
const cards = document.querySelectorAll(".card-dark");
const whiteText = document.querySelectorAll(".text-color-white");

btn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  cards.forEach((card) => {
    card.classList.toggle("card-light");
  });
  whiteText.forEach((text)=>{
    text.classList.toggle('text-color-black');
  })
});
