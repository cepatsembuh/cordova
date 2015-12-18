var cordova = require("cordova");
window.onload = action
var action = document.pesan.action = login();	
var rs = ["Royal Progress", "RSUP Dr Cipto Mangunkusumo", "RSUP Fatmawati", "RSUP Persahabatan"]

function login() {
	var nama = document.pesan.nama.value;
	var valid = false;

	var name = ["admin"];
	for (var i = 0; i < name.length; i++) {
		if ((nama == name[i]) {
			valid = true;
			break;
		};
	};

	if (valid) {
		window.location.href='rs.html';
	}; else {
		alert("Please register first")
	}
}
