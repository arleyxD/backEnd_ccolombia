// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const Tienda_Productos = require('../controllers/Tienda_Productos.controller');

router.get('/', Tienda_Productos.getFrutas);
router.get('/:id', Tienda_Productos.getFruta);
router.post('/', Tienda_Productos.createFruta);
router.put('/:id', Tienda_Productos.updateFruta);
router.delete('/:id', Tienda_Productos.deleteFruta);

module.exports = router;
