// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const Tienda_Productos = require('../controllers/Tienda_Productos.controller');

router.get('/', Tienda_Productos.getTiendas);
router.get('/:id', Tienda_Productos.getTienda);
router.post('/', Tienda_Productos.createTienda);
router.put('/:id', Tienda_Productos.updateTienda);
router.delete('/:id', Tienda_Productos.deleteTienda);

module.exports = router;
