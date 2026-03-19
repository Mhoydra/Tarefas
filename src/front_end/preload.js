const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    mensagem: () => console.log("Preload funcionando")
});