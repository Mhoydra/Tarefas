 import { db } from "../config/db.js";

const statusValidos = ["pendente", "em andamento", "concluída"]

export async function getTarefas(req, res) {
    const data = await db("tarefas").select("*")
    res.status(200).json({data})
}

export async function getTarefaId(req, res) {
    const id = req.params.id
    const tarefa = await db("tarefas").where({id}).first()
    if (!tarefa){
       return res.status(404).json({mensagem: "Tarefa não encontrada!"})
    }
    res.status(200).json({tarefa})
}

export async function createTarefa(req, res) {
    const {titulo, descricao, status} = req.body
    if(!titulo){
        return res.status(400).json({erro: "Título da tarefa é obrigatório!"})
    }
    if(status !== undefined && !statusValidos.includes(status)){
        return res.status(400).json({erro: "Status inválido!"})
    }
    const tarefa = {
        titulo,
        descricao,
        status,
    }
    const [id] = await db("tarefas").insert(tarefa)
    const novaTarefa = await db("tarefas").where({id}).first()
    res.status(201).json({mensagem: "Tarefa criada com sucesso!", tarefa: novaTarefa})
}

export async function deleteTarefa(req, res) {
    const id = req.params.id
    const findTarefa = await db("tarefas").where({id}).first()
    if(!findTarefa){
      return res.status(404).json({erro: "Tarefa não encontrada!"})
    }
    await db("tarefas").where({id}).del()
    res.status(200).json({mensagem: "Tarefa deletada com sucesso!"})
}

export async function updateTarefa(req, res) {
    const id = req.params.id
    const findTarefa = await db("tarefas").where({id}).first()
    if(!findTarefa){
      return res.status(404).json({erro: "Tarefa não encontrada!"})
    }
    const {titulo, descricao, status} = req.body
    const tarefaAtualizada = {} 
    if(titulo !== undefined){tarefaAtualizada.titulo = titulo}
    if(descricao !== undefined){tarefaAtualizada.descricao = descricao}
    if(status !== undefined && !statusValidos.includes(status)){
        return res.status(400).json({erro: "Status inválido!"})
    }
    if(status !== undefined){tarefaAtualizada.status = status}
    if(Object.keys(tarefaAtualizada).length === 0){
        return res.status(400).json({erro: "Nenhuma informação de tarefa foi atualizada!"})
    }
    await db("tarefas").where({id}).update(tarefaAtualizada)
    res.status(200).json({mensagem: "Tarefa atualizada com sucesso.", tarefa: tarefaAtualizada})
}