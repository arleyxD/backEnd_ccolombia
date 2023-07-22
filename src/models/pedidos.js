const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedidosSchema = new Schema({
    id_tienda: { type: Schema.Types.ObjectId, ref: 'Tiendas', required: true },
    id_fruta: { type: Schema.Types.ObjectId, ref: 'Frutas', required: true },
    cantidad: { type: Number, required: true },
    estado: { type: String, required: true, default: 'pendiente' },
    fecha: { type: Date, required: true, default: Date.now },
    cliente: {
      nombre: { type: String, required: true },
      direccion: { type: String, required: true }
    }
  });
  
  module.exports = mongoose.model('Pedidos', pedidosSchema);