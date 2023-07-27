// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const frutaController = require('../controllers/frutas.controller');
const validarToken = require('../middlewares/validate-jwt.middleware');

router.get('/', frutaController.getFrutas);
router.get('/:id', frutaController.getFruta);
router.post('/', validarToken, frutaController.createFruta);
router.put('/:id', validarToken, frutaController.updateFruta);
router.delete('/:id', validarToken, frutaController.deleteFruta);

module.exports = router;
