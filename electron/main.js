const { app, BrowserWindow } = require("electron")
const { spawn } = require("child_process")
const path = require("path")

let backendProcess

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // trocar o path para o arquivo index.html quando pronto
  win.loadURL("data:text/html,<h1>App rodando</h1>")
}

app.whenReady().then(() => {
  // Inicia BackEnd com método spawn chamando o local do arquivo rodando o node server.js
  backendProcess = spawn("node", [
    path.join(__dirname, "../backend/server.js")
  ])

  // Saída da mensagem do terminal ao utilizar o node server.js
  backendProcess.stdout.on("data", data => {
    console.log(`BACKEND: ${data}`)
  })
  // Saída da mensagem do terminal se der erro ao tentar rodar o servidor node
  backendProcess.stderr.on("data", data => {
    console.error(`ERRO BACKEND: ${data}`)
  })

  createWindow()
})

// Encerra back end junto quando fechar o electron
app.on("will-quit", () => {
  if (backendProcess) backendProcess.kill()
})