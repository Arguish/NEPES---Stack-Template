const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

if (require("electron-squirrel-startup")) {
  app.quit();
} //Esto no se que coño es...

//Configuracion de la ventana

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 200 * 2,
    height: 320 * 2,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "./ElectronPreload.js"),
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  mainWindow.webContents.openDevTools();
};

//Escuchas de la app

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//Escuchas del Render

ipcMain.on("ping", (ev, dat) => {
  console.log(dat);
  ev.reply("pong", "p0ng");
});
