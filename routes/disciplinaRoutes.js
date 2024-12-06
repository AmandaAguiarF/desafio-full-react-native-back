const express = require('express');
const router = express.Router();
const { createDisciplina, getDisciplinas, updateDisciplina, deleteDisciplina, getDisciplinaById } = require('../controllers/disciplinaController');

// Rotas de disciplinas
router.post('/', createDisciplina);
router.get('/', getDisciplinas);
router.get('/:id', getDisciplinaById);
router.put('/:id', updateDisciplina); // Rota para atualizar disciplina
router.delete('/:id', deleteDisciplina); // Rota para deletar disciplina

module.exports = router;
