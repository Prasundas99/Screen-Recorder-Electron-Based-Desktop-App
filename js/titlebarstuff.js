console.log("navbar.js");
/*const electron = require("electron");
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;




var minimise = document.getElementById('Minimise');
var maximise = document.getElementById('Maximise');
var close = document.getElementById('Close');

minimise.addEventListener('click', minimiseAPP);
maximise.addEventListener('click', maximiseAPP);
close.addEventListener('click', closeAPP);

function minimiseAPP(){
     console.log("app min");
     BrowserWindow.getFocusedWindow().minimize();
     
}

/*function maximiseAPP(){
     remote.BrowserWindow.getFocusedWindow().maximize();
}

function closeAPP(){
     remote.getCurrentWindow().close();

}*/