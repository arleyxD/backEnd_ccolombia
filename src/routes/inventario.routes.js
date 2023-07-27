// routes/inventarioRoutes.js
const { Router } = require( 'express' );

const router = Router();
const inventarioController = require('../controllers/inventario.controller');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

router.get('/', validateToken, inventarioController.getInventarios);
router.get('/:id', validateToken, inventarioController.getInventario);
router.post('/', validateToken, inventarioController.createInventario);
router.put('/:id', validateToken, inventarioController.updateInventario);
router.delete('/:id', validateToken, inventarioController.deleteInventario);

module.exports = router;
