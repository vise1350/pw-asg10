const express = require('express');
const random = require('random-number');

const port = 3000;

const app = express();

app.get('/random', (req, res) => {
  const randomNumber = random.integer(1, 100);
  res.json({ random: randomNumber });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
