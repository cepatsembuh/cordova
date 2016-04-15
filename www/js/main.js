/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/
'use strict';
// Firebase var
var ref = new Firebase("https://cepatsembuh.firebaseio.com/");

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
  'use strict';
	// Firebase
	var puskesmas = ref.child("puskesmas");
	var pasien = puskesmas.child("pasien")

	// Input value
	var nama = $('#nama').val();
	var nik = $('#nik').val();
	var lokasi = $('#lokasi').val();
	var input = $('.input-puskesmas').val();

	if (input == '') {
		// Validate name input
		alert('Input is not filled');
	} else {
      // Log input value for testing
      console.log('Nama: ' + nama);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      // Push input value to firebase
      pasien.push().set({
        nama: nama,
        nik: nik,
       lokasi: lokasi
     });

			// Get lokasi dropdown value
			switch (lokasi) {
				default:
					window.location.href = 'option/' + 'available.html';
					break;
		  };
	}
};

// RSUD form action
function rsud() {
  'use strict';
	// Firebase
	var rsud = ref.child("rsud");
	var pasien = rsud.child("pasien")

	// Input value
	var rujuk = $('#rujuk').val();
	var nik = $('#nik').val();
	var lokasi = $('#lokasi').val();
	var input = $('.input-rsud').val();

	if (input == '') {
		// Validate rujuk rsud input
		alert('Input is not filled');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      // Push input value to firebase
      pasien.push().set({
        no_rujuk: rujuk,
        nik: nik,
        lokasi: lokasi
      });

			// Get lokasi dropdown value
			switch (lokasi) {
				default:
					window.location.href = 'option/' + 'available.html';
					break;
		 };
	}
};

// RSUK form action
function rsuk() {
  'use strict';
	// Firebase
	var rsuk = ref.child("rsuk");
	var pasien = rsuk.child("pasien");

	// Input value
	var rujuk = $('#rujuk').val();
	var nik = $('#nik').val();
	var lokasi = $('#lokasi').val();
	var input = $('.input-rsuk').val();

	if (input == '') {
		// Validate rujuk rsuk input
		alert('Input is not filled');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      // Push input value to firebase
      pasien.push().set({
        no_rujuk: rujuk,
        nik: nik,
        lokasi: lokasi
      });
				// Get lokasi dropdown value
				switch (lokasi) {
					default:
						window.location.href = 'option/' + 'available.html';
						break;
			 };
	}
};

// RSS form action
function rss() {
  'use strict';
	// Firebase
	var rss = ref.child("rss");
	var pasien = rss.child("pasien");

	// Input value
	var rujuk = $('#rujuk').val();
	var nik = $('#nik').val();
	var lokasi = $('#lokasi').val();
	var input = $('.input-rss').val();

	if (input == '') {
		// Validate rujuk rss input
		alert('Input is not filled');
	} else {
      // Log input value for testing
      console.log('No Rujuk: ' + rujuk);
      console.log('NIK: ' + nik);
      console.log('Lokasi: ' + lokasi);

      // Push input value to firebase
      pasien.push().set({
        no_rujuk: rujuk,
        nik: nik,
        lokasi: lokasi
      });
				// Get lokasi dropdown value
				switch (lokasi) {
					default:
						window.location.href = 'option/' + 'available.html';
						break;
			 };
	}
}
