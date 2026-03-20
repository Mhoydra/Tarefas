import express from "express"
import cors from "cors"
import tarefaRouter from './routes/tarefas.routes.js'
const app = express()
const port = 3000

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5500"
}))
app.use("/tarefas", tarefaRouter)


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})