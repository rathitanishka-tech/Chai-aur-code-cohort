const usersContainer = document.getElementById("usersContainer");

const API_URL = "https://api.freeapi.app/api/v1/public/randomusers";

async function fetchUsers() {
  usersContainer.innerHTML = `<p class="loading">Loading users...</p>`;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const result = await response.json();

    const users = result.data.data;

    displayUsers(users);

  } catch (error) {
    usersContainer.innerHTML = `
      <p class="loading">❌ ${error.message}</p>
    `;
  }
}

function displayUsers(users) {
  usersContainer.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />

      <h2>${user.name.first} ${user.name.last}</h2>

      <div class="user-info">
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Country:</strong> ${user.location.country}</p>
        <p><strong>City:</strong> ${user.location.city}</p>
        <p><strong>Age:</strong> ${user.dob.age}</p>
      </div>
    `;

    usersContainer.appendChild(card);
  });
}

fetchUsers();