const mongoose = require('mongoose');

const distritosSchema = new mongoose.Schema({
  iId_Estado: {
    type: Number,
    required: true,
    enum: [1, 2], // 1: Activo, 2: Inactivo
    default: 1
  },
  vCodigo: {
    type: String,
    required: true,
    maxlength: 13
  },
  vNombre: {
    type: String,
    required: true,
    maxlength: 50
  },
  vDescripcion: {
    type: String,
    maxlength: 50
  }
});

module.exports = mongoose.model('distritos', distritosSchema);
