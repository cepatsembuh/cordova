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
  var nama = prompt("Masukan nama"),
      nik = prompt("Masukan NIK:");

  if (nama != "" || nik.length == 16) {
      // Firebase
      var pasien = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/pasien/');

      // Get data
      faskesRef.on("value", function(snapshot) {
        // Declare data variables
        data = snapshot.val().antrian;

        // Print data
        alert('No antrian: ' + data);

        // Push data to firebase
        /* pasien.push().set({
          nama: nama,
          nik: nik,
          nomor_antrian: data
        }) */
      });
  } else {
    // Error message
    alert("Input anda tidak valid. " + "\n" +"Anda tidak bisa mendapatkan nomor antrian");
  }
}

function tempatTidur(tipe, username) {
  // Firebase
  brea = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + '/faskes/' + username + '/tempat_tidur');

  // Log
  wait = 'Getting data..';
  console.log(wait);
  alert(wait);

  // Get data
  brea.on("value", function(snapshot) {
    // Data's
    satu = snapshot.val().satu;
    dua = snapshot.val().dua;
    tiga = snapshot.val().tiga;

    // Show user the data's
    alert("Kelas I: " + satu + "\n" + "Kelas II: " + dua + "\n" + "Kelas III: " + tiga);
  })
}

function doctorProfile(nama, gambar, lulusan, tahun) {
  // Text
  giant = "Lulusan: " + lulusan + "\n" + "Tahun: " + tahun;
  name = "dr. " + nama;
  image = "../../img/" + gambar;

  // Pop-up
  alert(name + "\n" + giant);
}
