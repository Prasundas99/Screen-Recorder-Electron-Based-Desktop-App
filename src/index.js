const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
     app.quit();
}

const createWindow = () => {
     // Create the browser window.
     const mainWindow = new BrowserWindow({
          width: 800,
          height: 700,
          minHeight: 500,
          minWidth:600,
          webPreferences: {
               nodeIntegration: true,
               enableRemoteModule: true,
          }
     });

     // and load the index.html of the app.
     mainWindow.loadFile(path.join(__dirname, 'index.html'));

    
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    
     if (process.platform !== 'darwin') {
          app.quit();
     }
});

app.on('activate', () => {
    
     if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
     }
});

