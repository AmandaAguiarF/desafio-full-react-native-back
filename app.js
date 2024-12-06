const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const disciplinaRoutes = require('./routes/disciplinaRoutes'); // Importe as rotas corretamente

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao banco de dados (MongoDB)
mongoose.connect('mongodb://localhost:27017/disciplinas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar no MongoDB', err);
});

// Use as rotas de disciplina
app.use('/api/disciplinas', disciplinaRoutes); // As rotas de disciplina devem ser acessadas por '/api/disciplinas'

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
