const { Schema, model } = require( 'mongoose' );
const tiendasSchema = new Schema({
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    horario: { type: String, required: true },
    contacto: { type: String, required: true },
    productos: [{ type: Schema.Types.ObjectId, ref: 'Frutas' }] // Referencia a las frutas
  });

  module.exports = model( 'Tiendas', tiendasSchema );