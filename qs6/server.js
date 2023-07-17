const http = require('http');

const port = 3000;

const menProducts = [
  {
    id: 1,
    name: 'Mens T-Shirt',
    price: 10,
    description: 'A simple men\'s t-shirt.',
  },
  {
    id: 2,
    name: 'Men\'s Jeans',
    price: 20,
    description: 'A pair of men\'s jeans.',
  },
  {
    id: 3,
    name: 'Men\'s Shoes',
    price: 30,
    description: 'A pair of men\'s shoes.',
  },
];

const womenProducts = [
  {
    id: 1,
    name: 'Women\'s Dress',
    price: 10,
    description: 'A simple women\'s dress.',
  },
  {
    id: 2,
    name: 'Women\'s Skirt',
    price: 20,
    description: 'A pair of women\'s skirts.',
  },
  {
    id: 3,
    name: 'Women\'s Shoes',
    price: 30,
    description: 'A pair of women\'s shoes.',
  },
];

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.write('Welcome to Men & Women Dummy Data');
    res.end();
  } else if (path === '/men') {
    res.json(menProducts);
  } else if (path === '/women') {
    res.json(womenProducts);
  } else {
    res.write('Page not found');
    res.end();
  }
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
