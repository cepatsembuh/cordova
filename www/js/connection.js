// document.addEventListener("deviceready", onDeviceReady, false);
// function onDeviceReady() {
//   validateConnection()
// }
//
// function validateConnection() {
//   var status = navigator.connection.type;
//
//   if (status == Connection.NONE) {
//       alert('No network connection!');
//   } else {
//       function daftar(tipe) {
//         console.log('URL: ' + tipe + '/index.html');
//         window.location.href = tipe + '/index.html';
//     }
//   }
// }

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

window.onload = checkConnection();
