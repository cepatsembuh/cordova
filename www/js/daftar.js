function validateNIK() {
	var faskes,
		glee = $('#glee').val(), // NIK Input Value
		pentatonix = glee.slice(0, 6);

	console.log('Validated: ' + pentatonix)
	if (pentatonix == '317206') {
		 faskes = 'kelapa-gading';
		 window.location.href = 'profil/' + faskes + '.html';
	}

}
function standByMe() {
	var nama = $('#name').val();
	var nik = $('#nik').val();
	var no = $('#no').val();

	if (nama == '') {
	  alert('Anda belum memasukan nama anda');
	} else if (nik.length != 16 && ) {
	  alert('NIK anda tidak valid');
	} else if (no.length != 20) {
	  alert('Nomor BPJS anda tidak valid');
	} else {			  
	  alert("Anda terdaftar di CepatSembuh!")
	  window.location.href = 'main.html';
	}
}