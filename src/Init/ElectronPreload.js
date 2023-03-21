// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcMain, ipcRenderer } = require("electron");

function sql() {
  document.addEventListener("DOMContentLoaded", function () {
    ipcRenderer.send("mainWindowLoaded");
    ipcRenderer.on("resultSent", function (evt, result) {
      let resultEl = document.getElementById("result");
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        resultEl.innerHTML +=
          "First Name: " + result[i].FirstName.toString() + "<br/>";
      }
    });
  });
}

let bridge = { sql };

contextBridge.exposeInMainWorld("Bridge", bridge);
