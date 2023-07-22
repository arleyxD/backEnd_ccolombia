// controllers/frutaController.js
const frutaService = require('../services/frutaService');

const getFrutas = async (req, res) => {
  const frutas = await frutaService.getAll();
  res.json(frutas);
}

const getFruta = async (req, res) => {
  const fruta = await frutaService.getById(req.params.id);
  res.json(fruta);
}

const createFruta = async (req, res) => {
  const fruta = await frutaService.create(req.body);
  res.json(fruta);
}

const updateFruta = async (req, res) => {
  const fruta = await frutaService.update(req.params.id, req.body);
  res.json(fruta);
}

const deleteFruta = async (req, res) => {
  await frutaService.remove(req.params.id);
  res.json({ message: 'Fruta eliminada' });
}

module.exports = { getFrutas, getFruta, createFruta, updateFruta, deleteFruta };
