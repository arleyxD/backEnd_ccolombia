const mongoose = require('mongoose');
const { Schema } = mongoose;
const frutasSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    variedad: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true }
  });
  
  module.exports = mongoose.model('Frutas', frutasSchema);