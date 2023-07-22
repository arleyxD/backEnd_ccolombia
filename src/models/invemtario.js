const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventarioSchema = new Schema({
    id_tienda: { type: Schema.Types.ObjectId, ref: 'Tiendas', required: true },
    id_fruta: { type: Schema.Types.ObjectId, ref: 'Frutas', required: true },
    cantidad_disponible: { type: Number, required: true },
    precio: { type: Number, required: true },
    unidad: { type: String, required: true }
  });

  module.exports = mongoose.model('Inventario', inventarioSchema);