const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: false },
  rating: { type: Number, required: false },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [{ type: String }], // Array de URLs de imágenes
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel; // Exportar con CommonJS
