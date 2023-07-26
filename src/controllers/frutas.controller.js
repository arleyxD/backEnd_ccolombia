// controllers/frutaController.js
const frutaService = require('../services/fruta.service');

const getFrutas = async (req, res) => {
 
  try{
    const frutas = await frutaService.getAll();
        res.status( 200 ).json({
          ok: true,
          path: '/Frutas',
          msg: 'Obtiene todos los Frutas',
          products: frutas
      }); 
    }catch ( error ) {
        console.log( error );
        res.status( 500 ).json({
            ok: false,
            path: '/Frutas',
            msg: 'Error al obtener los Frutas'
        });    
  }
}

const getFruta = async (req, res) => {
  try{
  const fruta = await frutaService.getById(req.params.id);
  
      res.status( 200 ).json({
        ok: true,
        path: '/Frutas',
        msg: 'Obtiene todos los Frutas',
        products: fruta
    }); 
  }catch ( error ) {
      console.log( error );
      res.status( 500 ).json({
          ok: false,
          path: '/Frutas',
          msg: 'Error al obtener los Frutas'
      });    
}

}

const createFruta = async (req, res) => {
  try {
    const fruta = await frutaService.create(req.body);
    res.status( 200 ).json({
      ok: true,
      path: '/Frutas',
      msg: 'Fruta creada',
      products: fruta
  });

  }catch ( error ) {
    console.log( error );
    return res.status( 500 ).json({
      ok: false,
      path: '/Frutas',
      msg: 'Error al crear fruta'
    });

  }
}

const updateFruta = async (req, res) => {
  try {
    const fruta = await frutaService.update(req.params.id, req.body);
    res.status(200).json({
      ok: true,
      path: '/Frutas',
      msg: 'Modificada la fruta',
      products: fruta
    });


  }catch ( error ) {
    console.error(error);
    res.status(500).json({
      ok: false,
      path: '/Frutas',
      msg: 'Error al modificar fruta'
    });
  }
  
}

const deleteFruta = async (req, res) => {
  try {
    const fruta = await frutaService.remove(req.params.id);
  return res.status(200).json({
    ok: true,
    path: '/Frutas',
    msg: 'Fruta eliminada',
    products: fruta
  });
  }catch ( error ) {
    console.error(error);
    return res.status(500).json({
      ok: false,
      path: '/Frutas',
      msg: 'Error al eliminar fruta'
    });
  }
  
}

module.exports = { getFrutas, getFruta, createFruta, updateFruta, deleteFruta };
