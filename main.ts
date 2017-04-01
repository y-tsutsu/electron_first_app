const electron = require('electron');
const app: Electron.App = electron.app
const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;

class MyApplication {
    mainWindow: Electron.BrowserWindow = null

    constructor() {
        app.on('ready', this.onReady);
        app.on('window-all-closed', this.onWindowAllClosed);
    }

    onReady() {
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            minWidth: 400,
            minHeight: 300
        });

        this.mainWindow.loadURL('file://${__dirname}/index.html')

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }

    onWindowAllClosed() {
        if (process.platform != 'darwin') {
            app.quit();
        }
    }
}

const myapp = new MyApplication();
