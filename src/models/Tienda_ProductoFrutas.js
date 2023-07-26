const mongoose = require('mongoose');
const { Schema } = mongoose;
const Tienda_ProductosFrutasSchema = Schema({
    Id_Tienda: { type: String, required: true },
    Id_Frutas: { type: String, required: true}
});

module.exports = mongoose.model('Tienda_ProductosFrutas', Tienda_ProductosFrutasSchema);