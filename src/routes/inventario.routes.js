// routes/inventarioRoutes.js
const { Router } = require( 'express' );

const router = Router();
const inventarioController = require('../controllers/inventario.controller');
const { validateToken } = require('../middlewares/validate-jwt.middleware');

router.get('/', inventarioController.getInventarios);
router.get('/:id', inventarioController.getInventario);
router.get('/listado/:id', inventarioController.getInventarioTiendaoFruta);
router.post('/', validateToken, inventarioController.createInventario);
router.put('/:id', validateToken, inventarioController.updateInventario);
router.delete('/:id', validateToken, inventarioController.deleteInventario);

module.exports = router;
