// Preload permite expor APIs seguras para o renderer
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    log: (msg) => console.log(`Mensagem do renderer: ${msg}`)
});