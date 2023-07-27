// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const Tienda_Productos = require('../controllers/Tienda_Productos.controller');
const validarToken = require('../middlewares/validate-jwt.middleware');

router.get('/', validarToken, Tienda_Productos.getTiendas);
router.get('/:id', validarToken, Tienda_Productos.getTienda);
router.post('/', validarToken, Tienda_Productos.createTienda);
router.put('/:id', validarToken, Tienda_Productos.updateTienda);
router.delete('/:id', validarToken, Tienda_Productos.deleteTienda);

module.exports = router;
