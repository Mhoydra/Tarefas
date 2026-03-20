import { Router } from "express";
import { createTarefa, deleteTarefa, getTarefaId, getTarefas, updateTarefa } from "../controller/tarefas.controller.js";
const router = Router()

router.get("/", getTarefas)
router.post("/", createTarefa)
router.get("/:id", getTarefaId)
router.delete("/:id", deleteTarefa)
router.put("/:id", updateTarefa)

export default router