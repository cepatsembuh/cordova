/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Puskesmas form action
function puskesmas() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
	var puskesmas = ref.child("puskesmas");
	var pasien = puskesmas.child("pasien")

	// Input value
	var nama_puskesmas = $('#nama_puskesmas').val();
	var nik_puskesmas = $('#nik_puskesmas').val();
	var madya_puskesmas = $('#madya_puskesmas').val();
	var input_puskesmas = $('.input-puskesmas').val();

	if (input_puskesmas == '') {
		// Validate name input
		alert('Input is not filled');
	} else {
			// Get madya dropdown value
			switch (madya_puskesmas) {
				default:
					window.location.href = 'available.html';
					break;
		 }
	}

	// Log input value for testing
	console.log('Nama: ' + nama_puskesmas);
	console.log('NIK: ' + nik_puskesmas);
	console.log('Lokasi: ' + madya_puskesmas);

	// Push input value to firebase
	pasien.push().set({
		nama: nama_puskesmas,
		nik: nik_puskesmas,
		lokasi: madya_puskesmas
	});
};

// RSUD form action
function rsud() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
	var rsud = ref.child("rsud");
	var pasien = rsud.child("pasien")

	// Input value
	var rujuk_rsud = $('#rujuk_rsud').val();
	var nik_rsud = $('#nik_rsud').val();
	var madya_rsud = $('#madya_rsud').val();
	var input_rsud = $('.input-rsud').val();

	if (input_rsud == '') {
		// Validate rujuk rsud input
		alert('Input is not filled');
	} else {
			// Get madya dropdown value
			switch (madya_rsud) {
				default:
					window.location.href = 'available.html';
					break;
		 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk_rsud);
	console.log('NIK: ' + nik_rsud);
	console.log('Lokasi: ' + madya_rsud);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk_rsud,
		nik: nik_rsud,
		lokasi: madya_rsud
	})
};

// RSUK form action
function rsuk() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
	var rsuk = ref.child("rsuk");
	var pasien = rsuk.child("pasien");

	// Input value
	var rujuk_rsuk = $('#rujuk_rsuk').val();
	var nik_rsuk = $('#nik_rsuk').val();
	var madya_rsuk = $('#madya_rsuk').val();
	var input_rsuk = $('.input-rsuk').val();

	if (input_rsuk == '') {
		// Validate rujuk rsuk input
		alert('Input is not filled');
	} else {
				// Get madya dropdown value
				switch (madya_rsuk) {
					default:
						window.location.href = 'available.html';
						break;
			 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk_rsuk);
	console.log('NIK: ' + nik_rsuk);
	console.log('Lokasi: ' + madya_rsuk);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk_rsuk,
		nik: nik_rsuk,
		lokasi: madya_rsuk
	})
};

// RSS form action
function rss() {
	// Firebase
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");
	var rss = ref.child("rss");
	var pasien = rss.child("pasien");

	// Input value
	var rujuk_rss = $('#rujuk_rss').val();
	var nik_rss = $('#nik_rss').val();
	var madya_rss = $('#madya_rss').val();
	var input_rss = $('.input-rss').val();

	if (input_rss == '') {
		// Validate rujuk rss input
		alert('Input is not filled');
	} else {
				// Get madya dropdown value
				switch (madya_rss) {
					default:
						window.location.href = 'available.html';
						break;
			 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk_rss);
	console.log('NIK: ' + nik_rss);
	console.log('Lokasi: ' + madya_rss);

	// Push input value to firebase
	pasien.push().set({
		no_rujuk: rujuk_rss,
		nik: nik_rss,
		lokasi: madya_rss
	})
};

// Not available faskes
$('#not-available').on('click', function() {
	alert("Faskes is not available")
})
