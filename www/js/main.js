var cordova = require('cordova')
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

if (cordova.platformId == 'android') {
	StatusBar.backgroundColorByHexString("#009688");
};

function valid() {
	var valid = true;

	// Validate Hospital
	if (document.hospital-form.no-bpjs.value == "") {
		alert("Mohon mengisi form dengan benar")
		valid = false;
	};

	// Validate Puskesmas
	if (document.puskes-form.no-bpjs.value == "") {
		alert("Mohon mengisi form dengan benar")
		valid = false;
	};
}