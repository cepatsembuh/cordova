/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Firebase go online whenever the application is open
document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Select the services
function selectServices(tipe) {
  console.log('User choose: ' + tipe);
  window.location.href = tipe + '/index.html';
}

// Select faskes function
function selectFaskes(username) {
  url = '../faskes/' + username + '.html';
  window.location.href = url;
}

// Puskesmas form action
function puskesmas() {
	// Firebase
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/"),
	    puskesmas = ref.child("puskesmas"),
	    pasien = puskesmas.child("pasien");

	// Input value
	var nama = $('#nama').val(),
	    nik = $('#nik').val(),
	    lokasi = $('#lokasi').val ();

	if (nama == '') {
		// Validate name input
		alert('Nama is not filled');
	} else if (nik.length != 16) {
	   alert('NIK anda tidak valid');
	} else {
      // Log input value for testing
      console.log('Nama: ' + nama);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

     switch (lokasi) {
      case "kelapa-gading":
         window.location.href = 'option' + '/kelapa-gading.html';
         break;
      case "cilincing":
 			 		window.location.href = 'option/' + 'cilincing.html';
 			 		break;
 			case "koja":
 					window.location.href = 'option/' + 'koja.html';
 					break;
 			case "pademangan":
 					window.location.href = 'option/' + 'pademangan.html';
 					break;
 			case "penjaringan":
 					window.location.href = 'option/' + 'penjaringan.html';
 					break;
 			case "tanjung_priok":
 					window.location.href = 'option/' + 'tanjung_priok.html';
 					break;
 			case "cengkareng":
 					window.location.href = 'option/' + 'cengkareng.html';
 					break;
 			case "grogol_petamburan":
 					window.location.href = 'option/' + 'grogol_petamburan.html';
 					break;
 			case "kalideres":
 					window.location.href = 'option/' + 'kalideres.html';
 					break;
 			case "kebon_jeruk":
 					window.location.href = 'option/' + 'kebon_jeruk.html';
 					break;
 			case "kembangan":
 					window.location.href = 'option/' + 'kembangan.html';
 					break;
 			case "palmerah":
 					window.location.href = 'option/' + 'palmerah.html';
 					break;
 			case "taman_sari":
 					window.location.href = 'option/' + 'taman_sari.html';
 					break;
 			case "tambora":
 					window.location.href = 'option/' + 'tambora.html';
 					break;
 			case "cilandak":
 					window.location.href = 'option/' + 'cilandak.html';
 					break;
 			case "jagakarsa":
 					window.location.href = 'option/' + 'jagakarsa.html';
 					break;
 			case "kebayoran_baru":
 					window.location.href = 'option/' + 'kebayoran_baru.html';
 					break;
 			case "kebayoran_lama":
 					window.location.href = 'option/' + 'kebayoran_lama.html';
 					break;
 			case "mampang_prapatan":
 					window.location.href = 'option/' + 'mampang_prapatan.html';
 					break;
 			case "pancoran":
 					window.location.href = 'option/' + 'pancoran.html';
 					break;
 			case "pasar_minggu":
 					window.location.href = 'option/' + 'pasar_minggu.html';
 					break;
 			case "pesanggrahan":
 					window.location.href = 'option/' + 'pesanggrahan.html';
 					break;
 			case "setia_budi":
 					window.location.href = 'option/' + 'setia_budi.html';
 					break;
 			case "tebet":
 					window.location.href = 'option/' + 'tebet.html';
 					break;
 			case "cakung":
 					window.location.href = 'option/' + 'cakung.html';
 					break;
 			case "cipayung":
 					window.location.href = 'option/' + 'cipayung.html';
 					break;
 			case "ciracas":
 					window.location.href = 'option/' + 'ciracas.html';
 					break;
 			case "duren_sawit":
 					window.location.href = 'option/' + 'duren_sawit.html';
 					break;
 			case "jatinegara":
 					window.location.href = 'option/' + 'jatinegara.html';
 					break;
 			case "kramat_jati":
 					window.location.href = 'option/' + 'kramat_jati.html';
 					break;
 			case "makassar":
 					window.location.href = 'option/' + 'makassar.html';
 					break;
 			case "matraman":
 					window.location.href = 'option/' + 'matraman.html';
 					break;
 			case "pasar_rebo":
 					window.location.href = 'option/' + 'pasar_rebo.html';
 					break;
 			case "pulo_gadung":
 					window.location.href = 'option/' + 'pulo_gadung.html';
 					break;
 			case "cempaka_putih":
 					window.location.href = 'option/' + 'cempaka_putih.html';
 					break;
 			case "gambir":
 					window.location.href = 'option/' + 'gambir.html';
 					break;
 			case "johar_baru":
 					window.location.href = 'option/' + 'johar_baru.html';
 					break;
 			case "kemayoran":
 					window.location.href = 'option/' + 'kemayoran.html';
 					break;
 			case "menteng":
 					window.location.href = 'option/' + 'menteng.html';
 					break;
 			case "sawah_besar":
 					window.location.href = 'option/' + 'sawah_besar.html';
 					break;
 			case "senen":
 					window.location.href = 'option/' + 'senen.html';
 					break;
 			case "tanah_abang":
 					window.location.href = 'option/' + 'tanah_abang.html';
 					break;
 			case "kep_seribu_selatan":
 					window.location.href = 'option/' + 'kep_seribu_selatan.html';
 					break;
 			case "kep_seribu_utara":
 					window.location.href = 'option/' + 'kep_seribu_utara.html';
 					break;

       default:
         window.location.href = 'option' + '/available.html';
         break;
     };

	}
};

// RSUD form action
function rsud() {
	// Firebase
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/"),
	    rsud = ref.child("rsud"),
	    pasien = rsud.child("pasien");

	// Input value
  var nama = $('#nama').val(),
	    rujuk = $('#rujuk').val(),
	    nik = $('#nik').val(),
	    lokasi = $('#lokasi').val();

	if (nama == '') {
		// Validate name input
		alert('Nama anda tidak valid');
	} else if (rujuk.length != 20) {
    // Validate rujuk number
	  alert('Nomor rujuk anda tidak valid');
	} else if (nik.length != 16) {
    // Validate nik number
	  alert('NIK anda tidak valid');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      switch (lokasi) {
        default:
          window.location.href = 'option' + '/available.html';
          break;
      };

	}
};

// RSUK form action
function rsuk() {
	// Firebase
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/"),
	    rsuk = ref.child("rsuk"),
	    pasien = rsuk.child("pasien");

	// Input value
  var nama = $('#nama').val(),
	    rujuk = $('#rujuk').val(),
	    nik = $('#nik').val(),
	    lokasi = $('#lokasi').val();

	if (nama == '') {
		// Validate name input
		alert('Nama anda tidak valid');
	} else if (rujuk.length != 20) {
    // Validate rujuk number
	  alert('Nomor rujuk anda tidak valid');
	} else if (nik.length != 16) {
    // Validate nik number
	  alert('NIK anda tidak valid');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      switch (lokasi) {
        default:
          window.location.href = 'option' + '/available.html';
          break;
      };
	}
};

// RSS form action
function rss() {
	// Firebase
  var ref = new Firebase("https://cepatsembuh.firebaseio.com/"),
	    rss = ref.child("rss"),
	    pasien = rss.child("pasien");

	// Input value
  var nama = $('#nama').val(),
	    rujuk = $('#rujuk').val(),
	    nik = $('#nik').val(),
	    lokasi = $('#lokasi').val();

	if (nama == '') {
		// Validate name input
		alert('Nama anda tidak valid');
	} else if (rujuk.length != 20) {
    // Validate rujuk number
	  alert('Nomor rujuk anda tidak valid');
	} else if (nik.length != 16) {
    // Validate nik number
	  alert('NIK anda tidak valid');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      switch (lokasi) {
        default:
          window.location.href = 'option' + '/available.html';
          break;
      };
	}
}
