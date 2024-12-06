const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cargaHoraria: {
        type: Number,
        required: true
    },
    responsavel: {
        type: String,
        ref: 'Responsavel', // Relacionamento com a coleção Responsável (se houver)
        required: true
    }
});

const Disciplina = mongoose.model('Disciplina', disciplinaSchema);

module.exports = Disciplina;
