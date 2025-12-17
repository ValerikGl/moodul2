import "./style.css";


document.addEventListener("DOMContentLoaded", () => {

  const sortButtons = document.querySelectorAll(".sort-btn");
  const grid = document.getElementById("products-grid");
  let cards = Array.from(document.querySelectorAll(".product-card"));

  if (!grid || !sortButtons.length) return;

  sortButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      sortButtons.forEach(b => {
        b.classList.remove("bg-purple-600", "text-white");
        b.classList.add("border", "border-purple-500", "text-purple-400");
      });

      btn.classList.add("bg-purple-600", "text-white");
      btn.classList.remove("border", "border-purple-500", "text-purple-400");

      sortProducts(btn.dataset.sort);
    });
  });

  function sortProducts(type) {
    let sorted = [...cards];

    if (type === "price-asc") {
      sorted.sort((a, b) => a.dataset.price - b.dataset.price);
    }

    if (type === "price-desc") {
      sorted.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    if (type === "newest") {
      sorted.sort(
        (a, b) => new Date(b.dataset.date) - new Date(a.dataset.date)
      );
    }

    if (type === "popular") {
      sorted.sort(
        (a, b) => b.dataset.popular.localeCompare(a.dataset.popular)
      );
    }

    sorted.forEach(card => grid.appendChild(card));
  }

});
