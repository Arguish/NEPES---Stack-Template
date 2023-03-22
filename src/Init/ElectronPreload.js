// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

async function pinpon() {
  ipcRenderer.send("ping", "p1ng");
  ipcRenderer.on("pong", (ev, dat) => {
    console.log(dat);
  });
}

let bridge = { pinpon };

contextBridge.exposeInMainWorld("Bridge", bridge);
