const express = require('express');
const cors = require('cors');

const app = express();

const model = require('./models/product');

const PORT = 3100;
const CORS_OPTIONS = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
};

app.use(cors(CORS_OPTIONS));

app.get('/', (_req, res) => res.send('Please navigate to /products'));

app.get('/products', async (_req, res) => {
  const products = await model.getAll();

  return res.status(200).json({ products });
});

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
