const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// "Banco de dados" fake (array)
let tarefas = [];
let idAtual = 1;

//  LISTAR tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//  CRIAR tarefa
app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;

    const novaTarefa = {
        id: idAtual++,
        titulo
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

//  ATUALIZAR tarefa
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;

    const tarefa = tarefas.find(t => t.id == id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefa.titulo = titulo;
    res.json(tarefa);
});

// DELETAR tarefa
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;

    tarefas = tarefas.filter(t => t.id != id);

    res.json({ mensagem: 'Tarefa deletada com sucesso' });
});

//  servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});