// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

function beLog() {
  ipcRenderer.send("canal1", "data");
  ipcRenderer.on("reply1", (ev, data) => {
    console.log(ev);
    console.log(data);
  });
}

let bridge = {
  beLog,
};

contextBridge.exposeInMainWorld("Bridge", bridge);
