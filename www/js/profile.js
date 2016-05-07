/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

document.addEventListener('deviceready', function () {
    Firebase.goOnline();
});

$('#not-available').on('click', function() {
	alert('Faskes is not available.')
})

function getNoAntri(tipe, username, name) {
  breanna = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username);

  alert('Pastikan koneksi anda stabil') // Make sure the connection is OK

  get = 'Getting data..';
  console.log(get);

  breanna.on("value", function(snapshot) {
    alert('Nomor Antrian: ' + snapshot.val().antrian)
  })

  console.log('Data is ready');
}

function tempatTidur(tipe, username) {
  brea = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username + '/tempat_tidur');

  wait = 'Getting data..';
  console.log(wait);
  alert(wait);

  brea.on('value', function(snapshot) {
    satu = snapshot.val().satu;
    dua = snapshot.val().dua;
    tiga = snapshot.val().tiga;

    alert('Kelas I: ' + satu + '\n' + 'Kelas II: ' + dua + '\n' + 'Kelas III: ' + tiga); // Show user the data's
  })
}

function doctorProfile(nama, lulusan, tahun) {
  giant = 'Lulusan: ' + lulusan + '\n' + 'Tahun: ' + tahun;
  name = 'dr. ' + nama;

  alert(name + '\n' + giant); // Pop-up
}
