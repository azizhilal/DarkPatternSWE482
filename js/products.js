// Define products array outside the DOMContentLoaded to be accessible by addToCart
var products = [
  { id: 1, name: "Whey Protein Powder - Chocolate", price: 49.99 },
  { id: 2, name: "Vegan Pea Protein - Vanilla", price: 59.99 },
  { id: 3, name: "Pre-Workout Booster - Berry Blast", price: 34.99 },
  { id: 4, name: "BCAA Energy Drink - Lemon Lime", price: 24.99 },
  { id: 5, name: "Yoga Mat - Eco Friendly", price: 29.99 },
  { id: 6, name: "Resistance Bands Set", price: 39.99 },
  { id: 7, name: "Adjustable Dumbbells - Pair", price: 199.99 },
  { id: 8, name: "Foam Roller for Recovery", price: 19.99 },
  { id: 9, name: "Blender Bottle - 24oz", price: 9.99 },
  { id: 10, name: "GymSmart Fitness Tracker", price: 129.99 },
];

document.addEventListener("DOMContentLoaded", function () {
  var productsElement = document.getElementById("products");

  products.forEach(function (product) {
    productsElement.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
  });
});

function addToCart(productId) {
  var product = products.find((p) => p.id === productId);
  cart.push(product);
  // Sneak another product into the basket
  var sneakyProduct = products.find((p) => p.id !== productId);
  cart.push(sneakyProduct);
  updateCartDisplay();
}

function updateCartDisplay() {
  var cartItemsElement = document.getElementById("cartItems");
  var totalCostElement = document.getElementById("totalCost");

  cartItemsElement.innerHTML = "";
  var totalCost = cart.reduce(function (sum, product) {
    return sum + product.price;
  }, 0);

  cart.forEach(function (product) {
    cartItemsElement.innerHTML += `<p>${
      product.name
    } - $${product.price.toFixed(2)}</p>`;
  });

  totalCostElement.textContent = totalCost.toFixed(2);
}

function checkout() {
  // Instead of checking out, redirect to add more items
  alert("Wait! Before you check out, have you seen our latest product offers?");
  window.location.href = "product-listing.html";
}
