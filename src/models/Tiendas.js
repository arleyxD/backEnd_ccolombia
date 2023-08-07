const { Schema, model } = require( 'mongoose' );
const tiendasSchema = new Schema({
    nameTienda:  { type: String, required: true },
    nit:  { type: String, required: true },
    local:  { type: String, required: true },
    location:  { type: String, required: true },
    scheduleStart:  { type: String, required: true },
    scheduleEnd:  { type: String, required: true },
    contact:  { type: String, required: true },
    idUsuario:{type: Schema.Types.ObjectId,ref:'User', required: true}
  });

  module.exports = model( 'Tiendas', tiendasSchema );