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

var ref = "https://cepatsembuh.firebaseio.com/";

function data() {
	var bpjs-rs = document.getElementbyId("bpjs-rs");
	var bpjs-puskesmas = document.getElementbyId("bpjs-puskesmas");

	ref.push(bpjs-rs);
	ref.push(bpjs-puskesmas);
	Firebase.goOnline

}