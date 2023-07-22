// controllers/tiendaController.js
const tiendaService = require('../services/tiendaService');

const getTiendas = async (req, res) => {
  const tiendas = await tiendaService.getAll();
  res.json(tiendas);
}

const getTienda = async (req, res) => {
  const tienda = await tiendaService.getById(req.params.id);
  res.json(tienda);
}

const createTienda = async (req, res) => {
  const tienda = await tiendaService.create(req.body);
  res.json(tienda);
}

const updateTienda = async (req, res) => {
  const tienda = await tiendaService.update(req.params.id, req.body);
  res.json(tienda);
}

const deleteTienda = async (req, res) => {
  await tiendaService.remove(req.params.id);
  res.json({ message: 'Tienda eliminada' });
}

module.exports = { getTiendas, getTienda, createTienda, updateTienda, deleteTienda };
