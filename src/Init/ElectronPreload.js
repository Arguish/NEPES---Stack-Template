// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

function docCreate(docname, data) {
  ipcRenderer.send("CreateRequest", docname, data);
  return ipcRenderer.on("replyCreate", (ev, data2) => {
    console.log("datos creados");
    console.log(data2);
    return data2;
  });
}

let bridge = {
  docCreate,
};

contextBridge.exposeInMainWorld("Bridge", bridge);
