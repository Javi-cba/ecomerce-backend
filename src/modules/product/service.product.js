const productModel = require('../../models/product');

async function findOneById(_id) {
  return await productModel.findById(_id).exec();
}

async function findAll() {
  return await productModel.find().exec();
}

async function insertMany(product) {
  return await productModel.insertMany(product);
}
async function deleteAll() {
  return await productModel.deleteMany();
}

module.exports = { findOneById, findAll, insertMany, deleteAll }; // exportación CommonJS
