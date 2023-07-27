const Tienda_ProductosService = require ('../services/Tienda_Productos.service');

const getTiendas = async (req, res) => {
 
    try{
      const tiendas = await Tienda_ProductosService.getAll();
          res.status( 200 ).json({
            ok: true,
            path: '/Tiendas',
            msg: 'Obtiene todas las Tiendas',
            products: tiendas
        }); 
      }catch ( error ) {
          console.log( error );
          res.status( 500 ).json({
              ok: false,
              path: '/Tiendas',
              msg: 'Error al obtener las Tiendas'
          });    
    }
  }
  const getTienda = async (req, res) => {
    try{
    const tienda = await Tienda_ProductosService.getById(req.params.id);
    
        res.status( 200 ).json({
          ok: true,
          path: '/Frutas',
          msg: 'Obtiene la tienda',
          products: tienda
      }); 
    }catch ( error ) {
        console.log( error );
        res.status( 500 ).json({
            ok: false,
            path: '/Tiendas',
            msg: 'Error al obtener la tienda'
        });    
  }
  
  }
  
  const createTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.create(req.body);
      res.status( 200 ).json({
        ok: true,
        path: '/Tiendas',
        msg: 'Tienda creada',
        products: tienda
    });
  
    }catch ( error ) {
      console.log( error );
      return res.status( 500 ).json({
        ok: false,
        path: '/Tiendas',
        msg: 'Error al crear la Tienda'
      });
  
    }
  }
  
  const updateTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.update(req.params.id, req.body);
      res.status(200).json({
        ok: true,
        path: '/Tiendas',
        msg: 'Modificada la Tienda',
        products: tienda
      });
  
  
    }catch ( error ) {
      console.error(error);
      res.status(500).json({
        ok: false,
        path: '/Tiendas',
        msg: 'Error al modificar la tienda'
      });
    }
    
  }
  
  const deleteTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.remove(req.params.id);
    return res.status(200).json({
      ok: true,
      path: '/Tiendas',
      msg: 'Tienda eliminada',
      products: tienda
    });
    }catch ( error ) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        path: '/Tienda',
        msg: 'Error al eliminar la Tienda'
      });
    }
    
  }
  
  module.exports = {getTiendas, getTienda, createTienda, updateTienda, deleteTienda };
  