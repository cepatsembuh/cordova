var cordova = require('cordova')
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

var input = document.getElementbyId('hospital-form').value;

function validate() {
 if input == "" {
  alert ("Please insert some input")
  return false;
 };

if (cordova.platformId == 'android') {
	StatusBar.backgroundColorByHexString("#009688");
};