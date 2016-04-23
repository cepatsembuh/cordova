/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Firebase go online whenever the application is open
document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Not available faskes
$('#not-available').on('click', function() {
	alert("Faskes is not available")
})

// Get no antrian function
function getNoAntri(tipe, username, name) {
  // Define firebase URL
  var faskesRef = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username);

  // Log firebase URL
  console.log('Url :' + "https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username);

  // Warn user that this fiture need internet
	alert('Fitur ini membutuhkan internet untuk mengambil data');

  // Confirmation
  alert("Mohon konfirmasi ulang");
  var nama = prompt("Masukan nama");
  if (nama != "") {
    var pasien = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + '/pasien/');
    // Initialize data
    faskesRef.on("value", function(snapshot) {
      // Print data
      alert('No antrian: ' + snapshot.val().antrian);
      pasien.push().set({
        nama: nama,
        nomor_antrian: snapshot.val().antrian
      })
    });
  } else {
    alert("Nama anda tidak valid. \n Anda tidak bisa mendapatkan nomor antrian");
  }  
}
