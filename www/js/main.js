var cordova = require('cordova')
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

var input = document.getElementbyId('hospital-form');

function validate() {
 if input == "" {
  alert ("Please insert some input")
 };
 else {
  return true;
}

if (cordova.platformId == 'android') {
	StatusBar.backgroundColorByHexString("#009688");
};