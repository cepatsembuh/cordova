window.onload = action
var action = document.pesan.action = login();

function login() {
	var nama = document.pesan.nama.value;
	var no-bpjs = document.pesan.no-bpjs.value;
	var name = "Andre Christoga";
	var bpjs-no = "";

	if ((nama == name) && (no-bpjs == bpjs-no)) {
		window.location.href = "rs.html";
	};
	else {
		alert("Harap mendaftar terlebih dahulu")
	}
}
