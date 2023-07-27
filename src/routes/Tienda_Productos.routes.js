const express = require('express');
const router = express.Router();
const Tiendas_Productoscontroller = require('../controllers/Tienda_Productos.controller');

router.get('/',Tiendas_Productoscontroller.getTiendas);
router.get('/:id',Tiendas_Productoscontroller.getTienda);
router.post ('/',Tiendas_Productoscontroller.createTienda);
router.put ('/:id',Tiendas_Productoscontroller.updateTienda);
router.delete ('/:id',Tiendas_Productoscontroller.deleteTienda);

module.exports = router;