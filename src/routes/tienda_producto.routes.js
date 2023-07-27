// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const Tienda_Productos = require('../controllers/Tienda_Productos.controller');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

router.get('/', validateToken, Tienda_Productos.getTiendas);
router.get('/:id', validateToken, Tienda_Productos.getTienda);
router.post('/', validateToken, Tienda_Productos.createTienda);
router.put('/:id', validateToken, Tienda_Productos.updateTienda);
router.delete('/:id', validateToken, Tienda_Productos.deleteTienda);

module.exports = router;
