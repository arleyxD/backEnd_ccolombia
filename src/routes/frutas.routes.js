// routes/frutaRoutes.js
const express = require('express');
const router = express.Router();
const frutaController = require('../controllers/frutaController');

router.get('/', frutaController.getFrutas);
router.get('/:id', frutaController.getFruta);
router.post('/', frutaController.createFruta);
router.put('/:id', frutaController.updateFruta);
router.delete('/:id', frutaController.deleteFruta);

module.exports = router;
