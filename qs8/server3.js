const express = require('express');

const port = 3000;

const app = express();

let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter: counter });
});

app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter: counter });
});

app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter: counter });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
