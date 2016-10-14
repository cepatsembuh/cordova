function standByMe() {
	var nama = $('#name').val();
	var nik = $('#nik').val();
	var no = $('#no').val();

	if (nama == '') {
	  alert('Anda belum memasukan nama anda');
	} else if (nik.length != 16) {
	  alert('NIK anda tidak valid');
	} else if (no.length != 20) {
	  alert('Nomor BPJS anda tidak valid');
	} else {			  
	  alert("Anda terdaftar di CepatSembuh!")
	  window.location.href = 'main.html';
	}
}