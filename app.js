const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

// Use the secret from .env file
const mySecret = process.env.MY_SECRET;

app.get('/', (req, res) => {
  res.send(`The secret is: ${mySecret}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
