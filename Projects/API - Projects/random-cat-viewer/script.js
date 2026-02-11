const catImage = document.getElementById("catImage");
const button = document.getElementById("btn");

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

async function fetchCat() {
  try {
    button.innerText = "Loading...";

    const response = await fetch(API_URL);
    const data = await response.json();

    const imageUrl = data.data.image;

    catImage.src = imageUrl;

    button.innerText = "Get New Cat";
  } catch (error) {
    console.error("Error fetching cat:", error);
    button.innerText = "Try Again";
  }
}

// Load first cat automatically
fetchCat();

// Fetch new cat on button click
button.addEventListener("click", fetchCat);