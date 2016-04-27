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
  if (nama != "" || nik.length != 16) {
    var pasien = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/pasien/');
    // Initialize data
    faskesRef.on("value", function(snapshot) {
      /* var data = snapshot.val().antrian,
      one = 1,
      sum = data + one;

      faskesRef.update({
        nama: name,
        antrian: sum
      }); */

      // Print data
      alert('No antrian: ' + snapshot.val().antrian);

      // Push data to firebase
      pasien.push().set({
        nama: nama,
        nomor_antrian: snapshot.val().antrian
      })
    });
  } else {
    // Error message
    alert("Input anda tidak valid. \n Anda tidak bisa mendapatkan nomor antrian");
  }
}

function tempatTidur(tipe, username) {
  brea = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + '/faskes/' + username);
  brea.on("value", function(snapshot) {
    data = snapshot.val().tempat_tidur;
    alert('Jumlah Tempat Tidur: ' + data);
  })
}

function doctorProfile(nama, gambar, lulusan, tahun) {
  giant = "Lulusan: " + lulusan + "<br>" + "Tahun: " + tahun;
  swal({
    title: "Dr. " + nama,
    imageUrl: "../../img/" + gambar,
    text: giant,
    html: true
  })
  console.log('Gambar: ' + gambar)
}
