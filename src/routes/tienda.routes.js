// routes/tiendaRoutes.js
const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tienda.controller');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

router.get('/', tiendaController.getTiendas);
router.get('/:id', tiendaController.getTienda);
router.get('/user/:id', tiendaController.getTiendaUser);
router.post('/', tiendaController.createTienda);
router.put('/:id', validateToken, tiendaController.updateTienda);
router.delete('/:id', validateToken, tiendaController.deleteTienda);

module.exports = router;
