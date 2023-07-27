const mongoose = require('mongoose');
const { Schema } = mongoose;
const Tienda_ProductosFrutasSchema = Schema({
    Id_Tienda: { type: Schema.Types.ObjectId, ref:'Tiendas', required :true },
    Id_Frutas: { type: Schema.Types.ObjectId, ref: 'Frutas',required: true}
});

module.exports = mongoose.model('Tienda_ProductosFrutas', Tienda_ProductosFrutasSchema);