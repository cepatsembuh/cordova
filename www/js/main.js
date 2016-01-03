var cordova = require('cordova')
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

var input = document.getElementbyId('hospital-form').value;

function checkTextField(input) {
    if (input.value == '') {	
        alert("Field is empty");
    }
}

if (cordova.platformId == 'android') {
	StatusBar.backgroundColorByHexString("#009688");
};