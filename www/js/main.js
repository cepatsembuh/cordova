/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

document.addEventListener("deviceready", function () {
    Firebase.goOnline();
}

// Puskesmas form action
function puskesmas() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
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
			// Get lokasi dropdown value
			switch (lokasi) {
				default:
					window.location.href = 'option/' + 'available.html';
					break;
		 }
	}

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
};

// RSUD form action
function rsud() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
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
			// Get lokasi dropdown value
			switch (lokasi) {
				default:
					window.location.href = 'option/' + 'available.html';
					break;
		 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk);
	console.log('NIK: ' + nik);
	console.log('Lokasi: ' + lokasi);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk,
		nik: nik,
		lokasi: lokasi
	})
};

// RSUK form action
function rsuk() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
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
				// Get lokasi dropdown value
				switch (lokasi) {
					default:
						window.location.href = 'option/' + 'available.html';
						break;
			 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk);
	console.log('NIK: ' + nik);
	console.log('Lokasi: ' + lokasi);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk,
		nik: nik,
		lokasi: lokasi
	})
};

// RSS form action
function rss() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
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
				// Get lokasi dropdown value
				switch (lokasi) {
					default:
						window.location.href = 'option/' + 'available.html';
						break;
			 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk);
	console.log('NIK: ' + nik);
	console.log('Lokasi: ' + lokasi);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk,
		nik: nik,
		lokasi: lokasi
	})
}
