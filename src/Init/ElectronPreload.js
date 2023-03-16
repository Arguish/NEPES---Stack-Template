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
  ipcRenderer.on("replyCreate", () => {
    console.log("datos creados");
  });
}
function dbUpdate() {
  ipcRenderer.send("UpdateRequest", data);
  ipcRenderer.on("replyUpdate", () => {
    console.log("datos actualizados");
  });
}
function dbRead(data) {
  ipcRenderer.send("ReadRequest", data);
  ipcRenderer.on("replyRead", (a) => {
    console.log(a);
    return a;
  });
}

function dbDelete() {
  ipcRenderer.send("DeleteRequest", data);
  ipcRenderer.on("replyDelete", () => {
    console.log("datos borrados");
  });
}

let bridge = {
  dbCreate,
  dbUpdate,
  dbRead,
  dbDelete,
};

contextBridge.exposeInMainWorld("Bridge", bridge);
