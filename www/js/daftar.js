function validateNIK() {
	var faskes,
		glee = $('#glee').val(), // NIK Input Value
		pentatonix = glee.slice(0, 6);

	console.log('Validated: ' + pentatonix)
	if (pentatonix == '317206') {
		 faskes = 'kelapa-gading';
		 window.location.href = 'profil/' + faskes + '.html';
	} else if (pentatonix = '317401') {
		faskes = 'tebet';
		window.location.href = 'profil/' + faskes + '.html';
	} else if (pentatonix = '317305') {
		faskes = 'kebon-jeruk';
		window.location.href = 'profil/' + faskes + '.html';
	} else if (pentatonix = '317506') {
		faskes = 'cakung';
		window.location.href = 'profil/' + faskes + '.html';
	} else {
		alert('Mohon maaf,' + '\n' + 'Puskesmas anda belum terintegrasi dengan CepatSembuh.')
	}
}
function standByMe() {
	var nama = $('#name').val();
	var nik = $('#nik').val();
	var bpjs = $('#bpjs').val();
	var email = $('#email').val();

	if (nama == '') {
	  alert('Anda belum memasukan nama anda');
	} else if (nik.length != 16) {
	  alert('NIK anda tidak valid');
	} else if (bpjs.length != 20) {
	  alert('Nomor BPJS anda tidak valid');
	} else if (email == '') {
	  alert('Mohon masukan email anda untuk mendapatkan berita terbaru dari CepatSembuh')
	} else {			  	  
	  window.location.href = 'main.html';
	}
}