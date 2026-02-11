# ✨ Quote Gallery App

A clean, minimal quote gallery + generator-style web app that fetches quotes from a public API and displays **2 random quotes at a time**. Each click refreshes the content to keep the experience fresh and focused.

---
## Live Link
https://quotes-app-freeapi.netlify.app


## 🚀 Features

*  Fetch quotes from API using Node.js backend
*  Displays only **2 random quotes per refresh**
*  Shuffle + random pagination for better variety
*  Dark premium UI
*  Responsive layout

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **API Fetching:** node-fetch

---

## 📁 Project Structure

```
quotes-app/
│
├── client/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── server/
│   ├── server.js
│   ├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```
cd server
npm install
```

### 2. Run backend server

```
node server.js
```

### 3. Run frontend

* Open `client/index.html` using Live Server

---

## 🔄 API Used

https://api.freeapi.app/api/v1/public/quotes

---

## 🌐 Deployment

### 🔹 Backend (Render)

* Deploy `server/` folder
* Start command: `node server.js`

### 🔹 Frontend (Netlify)

* Deploy `client/` folder
* Update API URL in `script.js`:

```
const API_BASE = 'https://quotes-app-wdfh.onrender.com/quotes';
```

---

## 💡 How It Works

* Fetches quotes from API via backend proxy
* Uses random page + shuffle logic
* Displays only 2 quotes for a clean experience
* Refresh button loads new quotes each time

---

## 📌 Notes

* Backend is required to avoid CORS issues
* API may return similar quotes → handled using shuffle + pagination
* Designed to feel like a simple quote generator, not a cluttered gallery

---

## 👨‍💻 Built by

Tanishka Rathi


