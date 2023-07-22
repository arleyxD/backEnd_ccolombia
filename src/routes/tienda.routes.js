// routes/tiendaRoutes.js
const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tienda.controller');

router.get('/', tiendaController.getTiendas);
router.get('/:id', tiendaController.getTienda);
router.post('/', tiendaController.createTienda);
router.put('/:id', tiendaController.updateTienda);
router.delete('/:id', tiendaController.deleteTienda);

module.exports = router;
