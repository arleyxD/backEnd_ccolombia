// controllers/tiendaController.js
const tiendaService = require('../services/tienda.services');

const getTiendas = async (req, res) => {
  try {
    const tiendas = await tiendaService.getAll();
    res.status(200).json({
      ok: true,
      path: '/tiendas',
      msg: 'Llamar todas las tiendas',
      produt: tiendas
    });
  }catch(error) {
    console.log( error );
      res.status( 500 ).json({
          ok: false,
          path: '/tiendas',
          msg: 'Error al obtener las tiendas'
      });
  }
  
}

const getTienda = async (req, res) => {
  try {
    const tienda = await tiendaService.getById(req.params.id);
    res.status(200).json({
      ok: true,
      path: '/tiendas',
      msg: 'Llamar la tienda',
      produt: tienda
    });
  }catch(error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      path: '/tiendas',
      msg: 'Error al obtener tienda'
    });

  }
  
}

const createTienda = async (req, res) => {
  try {
    const tienda = await tiendaService.create(req.body);
    res.status(200).json({
      ok: true,
      path: '/tiendas',
      msg: 'Tienda Creada',
      produt: tienda
    });
  }catch(error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      path: '/tiendas',
      msg: 'Error al crear la Tienda'
    });
  }
  
}

const updateTienda = async (req, res) => {
  try {
    const tienda = await tiendaService.update(req.params.id, req.body);
    res.status(200).json({
      ok: true,
      path: '/tiendas',
      msg: 'Modificada tienda',
      produt: tienda
    });
  }catch(error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      path: '/tiendas',
      msg: 'Error al modificar la Tienda'
    });

  }
  
}

const deleteTienda = async (req, res) => {
  try{
    const tienda = await tiendaService.remove(req.params.id);
    res.status(200).json({
      ok: true,
      path: '/tiendas',
      msg: 'Modificada tienda',
      produt: tienda
    });
  }catch(error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      path: '/tiendas',
      msg: 'Error al modificar la Tienda'
    });
  }
  
}

module.exports = { getTiendas, getTienda, createTienda, updateTienda, deleteTienda };
