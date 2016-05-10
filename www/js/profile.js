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
  breanna = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username),
  antri = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username + '/antrian');
  pasien = breanna.child("pasien");

  alert('Pastikan koneksi anda stabil'); // Make sure the connection is OK

  get = 'Getting data..';
  console.log(get);

  var nama = prompt("Nama: "),
      nik = prompt("NIK: ")

  if (nama === '' || nik.length != 16) {
    alert('Input tidak valid');
  } else {
    antri.transaction(function(currentRank) {
        currentData = currentRank + 1;

        pasien.push().set({
          nama: nama,
          nik: nik,
          no_antri: currentData
        })

        return currentData;
    }, function(error, committed, snapshot) {
        if (error) {
            alert('Koneksi anda tidak stabil' + error);
        } else {
            alert('Nomor Antrian: ' + snapshot.val());
        }
    });
  }

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
