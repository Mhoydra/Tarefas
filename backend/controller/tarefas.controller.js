 import { db } from "../config/db";

export async function getTarefas(req, res) {
    const data = await db("tarefas").select("*")
    res.status(200).json({data})
}

export async function getTarefaId(req, res) {
    const id = +req.params.id
    const tarefa = await db("tarefas").where({id}).first()
    if (!tarefa){
       return res.status(404).json({mensagem: "Tarefa não encontrada!"})
    }
    res.status(200).json({tarefa})
}

export async function createTarefa(req, res) {
    const {titulo, descricao, status} = req.body
    if(!titulo){
        return res.status(400).json({erro: "Título da terafa é obrigatório!"})
    }
    const tarefa = {
        titulo,
        descricao,
        status,
    }
    const criarTarefa = await db("tarefas").insert(tarefa)
    res.status(201).json({mensagem: "Tarefa criada com sucesso!", tarefa: criarTarefa})
}