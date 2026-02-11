const container = document.getElementById("video-container");

const url = "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript";

async function fetchVideos() {
  try {
    const res = await fetch(url);
    const result = await res.json();

    const videos = result.data.data;

    displayVideos(videos);
  } catch (err) {
    console.error("Error fetching videos:", err);
  }
}

function displayVideos(videos) {
  container.innerHTML = "";

  videos.forEach(video => {
    const snippet = video.items?.snippet || video.snippet;

    const thumbnail = snippet.thumbnails?.high?.url || "";
    const title = snippet.title;
    const channel = snippet.channelTitle;

    const views = video.statistics?.viewCount || "N/A";

    const card = document.createElement("div");
    card.classList.add("video-card");

    card.innerHTML = `
      <img src="${thumbnail}" class="thumbnail"/>

      <div class="video-info">
        <img src="https://i.pravatar.cc/40" class="channel-icon"/>

        <div class="video-details">
          <div class="title">${title}</div>
          <div class="channel">${channel}</div>
          <div class="meta">${views} views</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

fetchVideos();