const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET']
}));

app.get('/quotes', async (req, res) => {
  try {
    const page = req.query.page || 1;


const response = await fetch(
  `https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=20`,
  { method: 'GET', headers: { accept: 'application/json' } }
);

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});