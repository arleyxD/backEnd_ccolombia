// controllers/inventarioController.js
const inventarioService = require('../services/inventario.service');

const getInventarios = async (req, res) => {
  const inventarios = await inventarioService.getAll();
  res.json(inventarios);
}

const getInventario = async (req, res) => {
  const inventario = await inventarioService.getById(req.params.id);
  res.json(inventario);
}
const getInventarioTiendaoFruta = async (req, res) => {
  const inventario = await inventarioService.getByIdToF(req.params.id);
  res.json(inventario);
}
const createInventario = async (req, res) => {
  const inventario = await inventarioService.create(req.body);
  res.json(inventario);
}

const updateInventario = async (req, res) => {
  const inventario = await inventarioService.update(req.params.id, req.body);
  res.json(inventario);
}

const deleteInventario = async (req, res) => {
  await inventarioService.remove(req.params.id);
  res.json({ message: 'Inventario eliminado' });
}

module.exports = { getInventarios, getInventario, createInventario, updateInventario, deleteInventario,getInventarioTiendaoFruta };
