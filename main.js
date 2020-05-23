const { app, BrowserWindow  } = require('electron')

function createWindow() {
	// creates a navigation window
	let window = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	//loads the index.html
	window.loadFile('index.html')
}

app.whenReady().then(createWindow)


