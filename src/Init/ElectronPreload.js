// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

function saveData(channel, data, response = false, cresponse) {
  ipcRenderer.send(channel, data);
  let r;
  ipcRenderer.on(cresponse, (ev, rdata) => {
    return rdata;
  });
}

function dbCreate(data) {
  ipcRenderer.send("CreateRequest", data);
  ipcRenderer.on("replyCreate", (ev, data2) => {
    console.log("datos creados");
    console.log(data2);
    return data2;
  });
}

let bridge = {
  dbCreate,
};

contextBridge.exposeInMainWorld("Bridge", bridge);
