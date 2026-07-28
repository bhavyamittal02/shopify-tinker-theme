const btn = document.querySelector(".load-more");
const grid = document.querySelector("#product-grid");

let loading = false;

btn?.addEventListener("click", async () => {

  if (loading) return;

  loading = true;

  const url = btn.dataset.nextPage;

  const response = await fetch(url);
  const html = await response.text();

  const doc = new DOMParser().parseFromString(html, "text/html");

  const products = doc.querySelectorAll("#product-grid .product-item");

  products.forEach(product => {
    grid.appendChild(product);
  });

  const nextBtn = doc.querySelector(".load-more");

  if (nextBtn) {
    btn.dataset.nextPage = nextBtn.dataset.nextPage;
  } else {
    btn.remove();
  }

  loading = false;
});