const container = document.getElementById('quotesContainer');
const refreshBtn = document.getElementById('refreshBtn');

const API_BASE = 'https://quotes-app-wdfh.onrender.com/quotes';

async function fetchQuotes() {
  container.innerHTML = `<p>Loading...</p>`;

  try {
    const randomPage = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(`${API_BASE}?page=${randomPage}`);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    let quotes = result?.data?.data || [];

    if (quotes.length === 0) {
      container.innerHTML = `<p>No quotes found</p>`;
      return;
    }

    quotes = quotes.sort(() => 0.5 - Math.random());

    
    const selectedQuotes = quotes.slice(0, 2);

    container.innerHTML = "";

    selectedQuotes.forEach(({ content, author }) => {
      const card = document.createElement('div');
      card.className = 'quote-card';

      card.innerHTML = `
        <p class="quote-text">"${content}"</p>
        <p class="quote-author">— ${author || "Unknown"}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Fetch error:", error);
    container.innerHTML = `<p>Something went wrong. Try again.</p>`;
  }
}

refreshBtn.addEventListener('click', fetchQuotes);
fetchQuotes();