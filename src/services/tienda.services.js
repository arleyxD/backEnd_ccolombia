// services/tiendaService.js
const Tienda = require('../models/Tiendas');

const getAll = async () => {
  return await Tienda.find().populate('productos');
}

const getById = async (id) => {
  return await Tienda.findById(id).populate('productos');
}

const create = async (data) => {
  return await Tienda.create(data);
}

const update = async (id, data) => {
  return await Tienda.findByIdAndUpdate(id, data, { new: true });
}

const remove = async (id) => {
  return await Tienda.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, remove };
