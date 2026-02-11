const container = document.getElementById("products-container");
const searchInput = document.getElementById("searchInput");

let allProducts = [];

async function fetchProducts() {
  try {
    const res = await fetch("https://api.freeapi.app/api/v1/public/randomproducts");
    const data = await res.json();

    allProducts = data?.data?.data || [];
    displayProducts(allProducts);
  } catch (err) {
    console.error(err);
  }
}

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
  <div class="badge">HOT</div>

  <img src="${p.thumbnail}" class="product-image"/>

  <div class="product-title">${p.title}</div>

  <div class="product-price">₹${p.price}</div>

  <div class="product-rating">
    ⭐ ${p.rating || "4.2"}
  </div>
`;

    container.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

fetchProducts();