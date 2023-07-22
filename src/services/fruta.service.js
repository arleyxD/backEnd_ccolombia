// services/frutaService.js
const Fruta = require('../models/Frutas');

const getAll = async () => {
  return await Fruta.find();
}

const getById = async (id) => {
  return await Fruta.findById(id);
}

const create = async (data) => {
  return await Fruta.create(data);
}

const update = async (id, data) => {
  return await Fruta.findByIdAndUpdate(id, data, { new: true });
}

const remove = async (id) => {
  return await Fruta.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, remove };
