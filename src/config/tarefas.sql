-- Criar banco 
CREATE DATABASE IF NOT EXISTS sistema_tarefas;

-- Usar o banco
USE sistema_tarefas;

-- Tabela tarefas
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(200),
    status VARCHAR(50) DEFAULT 'pendente',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir tarefas
INSERT INTO tarefas (titulo, descricao)
VALUES ('Estudar Git', 'Aprender branch e merge');

-- Listar tarefas 
SELECT * FROM tarefas;

-- Atualizar tarefa 
-- PUT
UPDATE tarefas
SET status = 'concluida'
WHERE id = 1;

-- Deletar tarefa
DELETE FROM tarefas
WHERE id = 1;

