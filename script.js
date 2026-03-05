
const boutons = document.querySelectorAll(".card .btn");

const cartCount = document.querySelector(".cart-count");
let count = 0;
boutons.forEach(btn => {
  btn.addEventListener("click", () => {
    count++; // On ajoute 1
    cartCount.textContent = count;
  });
});
    const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("section-visible");
    } else {
      section.classList.remove("section-visible");
    }
  });
});
const btns = document.querySelectorAll(".card .btn");
const cartount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total");
let cout = 0;
let total = 0;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const price = parseFloat(btn.getAttribute("data-price")); // récupère le prix
    count;
    total += price;

    cartCount.textContent = count;       // nombre d’articles
    cartTotal.textContent = "$" + total; // somme totale
  });
});
