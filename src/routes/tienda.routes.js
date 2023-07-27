// routes/tiendaRoutes.js
const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tienda.controller');
const validarToken = require('../middlewares/validate-jwt.middleware');

router.get('/', tiendaController.getTiendas);
router.get('/:id', tiendaController.getTienda);
router.post('/', validarToken, tiendaController.createTienda);
router.put('/:id', validarToken, tiendaController.updateTienda);
router.delete('/:id', validarToken, tiendaController.deleteTienda);

module.exports = router;
