const Disciplina = require('../models/disciplina');

// Criar nova disciplina
exports.createDisciplina = async (req, res) => {
    try {
        const { nome, cargaHoraria, responsavel } = req.body;
        const disciplina = new Disciplina({ nome, cargaHoraria, responsavel });
        await disciplina.save();
        res.status(201).json(disciplina);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todas as disciplinas
exports.getDisciplinas = async (req, res) => {
    try {
        const disciplinas = await Disciplina.find().populate('responsavel', 'nome');
        res.status(200).json(disciplinas);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Buscar disciplina por ID
exports.getDisciplinaById = async (req, res) => {
    try {
        const disciplina = await Disciplina.findById(req.params.id).populate('responsavel', 'nome');
        if (!disciplina) {
            return res.status(404).json({ message: 'Disciplina não encontrada' });
        }
        res.status(200).json(disciplina);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar disciplina
exports.updateDisciplina = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cargaHoraria, responsavel } = req.body;

        const updatedDisciplina = await Disciplina.findByIdAndUpdate(id, { nome, cargaHoraria, responsavel }, { new: true });
        if (!updatedDisciplina) return res.status(404).json({ message: 'Disciplina não encontrada' });

        res.status(200).json(updatedDisciplina);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir disciplina
exports.deleteDisciplina = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDisciplina = await Disciplina.findByIdAndDelete(id);
        if (!deletedDisciplina) return res.status(404).json({ message: 'Disciplina não encontrada' });

        res.status(200).json({ message: 'Disciplina excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
