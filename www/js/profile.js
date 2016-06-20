/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

document.addEventListener('deviceready', function () {
    Firebase.goOnline();
});

// Example faskes action
$('#not-available').on('click', function() {
	alert('Faskes is not available.')
})

function getNoAntri(tipe, username, name) {
  grease = '../poli/' + username + '.html';
  window.location.href = grease;
}

function tempatTidur(tipe, username) {
  // Firebase URL
  brea = new Firebase('http://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username + '/tempat_tidur');

  // Waiting message
  wait = 'Getting data..';
  console.log(wait);
  alert(wait);

  // Get the data
  brea.on('value', function(snapshot) {
    satu = snapshot.val().satu;
    dua = snapshot.val().dua;
    tiga = snapshot.val().tiga;

    alert('Kelas I: ' + Number(satu) + '\n' + 'Kelas II: ' + Number(dua) + '\n' + 'Kelas III: ' + Number(tiga)); // Show user the data's
  })
}

function doctorProfile(nama, lulusan, tahun) {
  giant = 'Lulusan: ' + lulusan + '\n' + 'Tahun: ' + tahun; // Doctor content
  name = 'dr. ' + nama; // Doctor name

  alert(name + '\n' + giant); // Pop-up
}

function pilihPoli(username) {
}
