const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokeBtn");

async function fetchJoke() {
  try {
    setupText.textContent = "Loading joke...";
    punchlineText.textContent = "";

    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    );

    const result = await response.json();

    const joke = result.data;

    setupText.textContent = joke.content;
    punchlineText.textContent = `😂 Joke ID: ${joke.id}`;

  } catch (error) {
    setupText.textContent = "Failed to load joke!";
    punchlineText.textContent = "Please try again.";
    console.error(error);
  }
}

jokeBtn.addEventListener("click", fetchJoke);

fetchJoke();