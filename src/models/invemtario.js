const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventarioSchema = new Schema({
    id_tienda: { type: Schema.Types.ObjectId, ref: 'Tiendas', required: true },
    id_fruta: { type: Schema.Types.ObjectId, ref: 'Frutas', required: true },
    tipo:{type:String},
    inventarioCanastilla:{ type: Number},
    inventarioBulto:{ type: Number},
    valorMedioKilo: { type: Number, required: true },
    valorKilo:{ type: Number, required: true },
    valorC:{ type: Number},
    valorB:{ type: Number}
  });

  module.exports = mongoose.model('Inventario', inventarioSchema);