// routes/inventarioRoutes.js
const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventario.controller');
const validarToken = require('../middlewares/validate-jwt.middleware');

router.get('/', validarToken, inventarioController.getInventarios);
router.get('/:id', validarToken, inventarioController.getInventario);
router.post('/', validarToken, inventarioController.createInventario);
router.put('/:id', validarToken, inventarioController.updateInventario);
router.delete('/:id', validarToken, inventarioController.deleteInventario);

module.exports = router;
