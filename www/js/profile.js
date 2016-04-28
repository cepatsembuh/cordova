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
    nik = prompt("Masukan NIK:");
    if (nik.length != 16) {
      // Firebase
      var pasien = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/pasien/');

      // Get data
      faskesRef.on("value", function(snapshot) {
        // Print data
        alert('No antrian: ' + snapshot.val().antrian);

        // Push data to firebase
        pasien.push().set({
          nama: nama,
          nomor_antrian: snapshot.val().antrian
        })
      });
    };
  } else {
    // Error message
    alert("Input anda tidak valid. \n Anda tidak bisa mendapatkan nomor antrian");
  }
}

function tempatTidur(tipe, username) {
  // Firebase
  brea = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + '/faskes/' + username);

  // Log
  wait = 'Getting data..';
  console.log(wait);
  alert(wait);

  // Get data
  brea.on("value", function(snapshot) {
    data = snapshot.val().tempat_tidur;
    text = "<h2 style=\"font-weight: 300\">" + data + "</h2>";
    swal({
      title: "Jumlah Tempat Tidur",
      text: text,
      type: "success",
      html: true
    })
  })
}

function doctorProfile(nama, gambar, lulusan, tahun) {
  // Text
  giant = "Lulusan: " + lulusan + "<br>" + "Tahun: " + tahun;
  name = "dr. " + nama;
  image = "../../img/" + gambar;

  // Pop-up
  swal({
    title: name,
    imageUrl: image,
    text: giant,
    html: true
  })
}
