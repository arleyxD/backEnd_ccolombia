const Tienda_Productos = require('../models/Tienda_ProductoFrutas');

const getAll = async () => {
    return await Tienda_Productos.find();
}

const getById = async (id) => {
    return await Tienda_Productos.findById(id);
}

const create = async (data) => {
    return await Tienda_Productos.create(data);
}

const update = async (id, data) => {
    return await Tienda_Productos.update(id, data, { new: true });
}

const remove = async (id) => {
    return await Tienda_Productos.findByIdAndDelete(id);
}

module.exports = { getAll, getById, create, update, remove};