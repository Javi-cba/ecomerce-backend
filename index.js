const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv'); // Importación correcta
const mongoose = require('mongoose');
const productRouter = require('./src/modules/product/routes.products'); // Sin .js al final en CommonJS

dotenv.config();
const PORT = process.env.PORT;
const DBUrl = process.env.DBUrl;

const app = express();
app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.options('', cors(corsOptions));
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// conexión a MongoDB
mongoose
  .connect(DBUrl)
  .then(() => {
    console.log('Conectado a MongoDB'); // Mensaje de éxito
  })
  .catch(error => {
    console.error('Error al conectar a MongoDB:', error); // Mensaje de error
  });

// Rutas
app.use('/api/product', productRouter);

app.get('/', async (request, response) => {
  return response.send('Backend index');
});

app.listen(PORT, () => {
  console.log(`Server EComerce en http://localhost:${PORT}`);
});
