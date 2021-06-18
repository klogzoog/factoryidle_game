const { app, BrowserWindow} = require('electron');

const windowOption = {
    width: 1920,
    height: 1080,
    center: true,
    resizable: true,
    webPreferences: {
        nodeIntegration: false, // electron version 5 disabled this
        contextIsolation: false
    }
}

app.on('ready', ()=>{
    win = new BrowserWindow(windowOption);
    //win.webContents.openDevTools();
    win.loadFile(`${__dirname}/public/index.html`)
        .then(r => console.log('index is loaded'));
});
