// global.js

// Try to retrieve existing user data from localStorage
var userData = JSON.parse(localStorage.getItem("userData")) || {};
var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to toggle sign-up/login buttons based on user login status
function toggleUserLinks() {
  var userLinks = document.getElementById("userLinks");
  var myAccountBtn = document.getElementById("myAccountBtn");

  // Check if userData has been populated and modify UI accordingly
  if (userLinks && myAccountBtn) {
    if (userData.email) {
      userLinks.style.display = "none";
      myAccountBtn.style.display = "block";
    } else {
      userLinks.style.display = "block";
      myAccountBtn.style.display = "none";
    }
  }
}

// Function to save user data to local storage for persistence
function saveUserData() {
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to handle sign up
function handleSignup(event) {
  event.preventDefault();
  userData.name = document.getElementById("fullname").value;
  userData.email = document.getElementById("email").value;
  userData.password = document.getElementById("password").value;
  userData.creditCard = document.getElementById("credit-card").value;

  // Handle the hidden subscription
  var subscribeCheckbox = document.getElementById("hiddenSubscription");
  if (subscribeCheckbox && subscribeCheckbox.checked) {
    userData.subscription = "Monthly Protein Pack"; // Set some subscription data
  }

  saveUserData();
  alert(
    "Thank you for signing up for GymSmart, " +
      userData.name +
      "! Your discount and subscription are now active. Enjoy shopping!"
  );
  window.location.href = "home.html";
}

// Call toggleUserLinks to ensure correct display on page load
document.addEventListener("DOMContentLoaded", toggleUserLinks);
