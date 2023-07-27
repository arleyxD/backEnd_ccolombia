// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const frutaController = require('../controllers/frutas.controller');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

router.get('/', frutaController.getFrutas);
router.get('/:id', frutaController.getFruta);
router.post('/', validateToken, frutaController.createFruta);
router.put('/:id', validateToken, frutaController.updateFruta);
router.delete('/:id', validateToken, frutaController.deleteFruta);

module.exports = router;
