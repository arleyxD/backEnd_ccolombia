const Tienda_ProductosService = require ('../services/Tienda_Productos.service');

const getTiendas = async (req, res) => {
 
    try{
      const tiendas = await Tienda_ProductosService.getAll();
          res.status( 200 ).json({
            ok: true,
            path: '/TiendasProductos',
            msg: 'Obtiene todas las Tiendas Productos',
            products: tiendas
        }); 
      }catch ( error ) {
          console.log( error );
          res.status( 500 ).json({
              ok: false,
              path: '/TiendasProductos',
              msg: 'Error al obtener las Tiendas Productos'
          });    
    }
  }
  
  const getTienda = async (req, res) => {
    try{
    const tienda = await Tienda_ProductosService.getById(req.params.id);
    
        res.status( 200 ).json({
          ok: true,
          path: '/TiendasProductos',
          msg: 'Obtiene la tienda Producto',
          products: tienda
      }); 
    }catch ( error ) {
        console.log( error );
        res.status( 500 ).json({
            ok: false,
            path: '/TiendasProductos',
            msg: 'Error al obtener la tienda Producto'
        });    
  }
  
  }
  
  const createTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.create(req.body);
      res.status( 200 ).json({
        ok: true,
        path: '/TiendasProductos',
        msg: 'Tienda Producto creada',
        products: tienda
    });
  
    }catch ( error ) {
      console.log( error );
      return res.status( 500 ).json({
        ok: false,
        path: '/TiendasProductos',
        msg: 'Error al crear la Tienda Producto'
      });
  
    }
  }
  
  const updateTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.update(req.params.id, req.body);
      res.status(200).json({
        ok: true,
        path: '/TiendasProductos',
        msg: 'Modificada la Tienda Producto',
        products: tienda
      });
  
  
    }catch ( error ) {
      console.error(error);
      res.status(500).json({
        ok: false,
        path: '/TiendasProductos',
        msg: 'Error al modificar la tienda Producto'
      });
    }
    
  }
  
  const deleteTienda = async (req, res) => {
    try {
      const tienda = await Tienda_ProductosService.remove(req.params.id);
    return res.status(200).json({
      ok: true,
      path: '/TiendasProductos',
      msg: 'Tienda Producto eliminada',
      products: tienda
    });
    }catch ( error ) {
      console.error(error);
      return res.status(500).json({
        ok: false,
        path: '/TiendaProductos',
        msg: 'Error al eliminar la Tienda Producto'
      });
    }
    
  }
  
  module.exports = {getTiendas, getTienda, createTienda, updateTienda, deleteTienda };
  