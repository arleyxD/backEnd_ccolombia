// services/inventarioService.js
const Inventario = require('../models/invemtario');

const getAll = async () => {
  return await Inventario.find().populate('id_tienda').populate('id_fruta');
}

const getById = async (id) => {
  return await Inventario.findById(id).populate('id_tienda').populate('id_fruta');
}

const create = async (data) => {
  return await Inventario.create(data);
}

const update = async (id, data) => {
  return await Inventario.findByIdAndUpdate(id, data, { new: true });
}

const remove = async (id) => {
  return await Inventario.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, remove };
