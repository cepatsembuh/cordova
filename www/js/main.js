window.onload = action
var action = document.pesan.action = login();

function login() {
	var nama = document.pesan.nama.value;
	var name = "Andre Christoga";	

	if ((nama == name)) {
		window.location.href = "rs.html";
		return true;
	};
	else {
		alert("Harap mendaftar terlebih dahulu")
		return false;
	}
}
