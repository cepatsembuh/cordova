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
  var nama = $('#nama').val(),
      nik = $('#nik').val(),
      poli = $('#poli').val();

  dipcifica = new Firebase('https://cepatsembuh.firebaseio.com/puskesmas/faskes/' + username),

  date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  right_now = year + '-' + month + '-' + day,
  today = dipcifica.child(right_now),

  bpu = dipcifica.child('bpu'),

  bpu_pasien = today.child('bpu-pasien'),
  bpg_pasien = today.child('bpg-pasien'),
  kia_pasien = today.child('kia-pasien');

  switch (poli) {
    case 'bpu':
      bpu.transaction(function(currentRank) {
        currentData = currentRank + 1;

        return currentData;
        }, function(error, committed, snapshot) {
            if (error) {
                // Error message
                alert('Koneksi anda tidak stabil' + error);
            } else {
                // Send the Data
                alert('Nomor Antrian: ' + snapshot.val() + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                // Push the prompt data
                bpu_pasien.push().set({
                  nama: nama,
                  nik: nik,
                  no_antri: snapshot.val(),
                  poli: 'BPU'
                })
            }
        });
      break;
    case 'bpg':
      bpg.transaction(function(currentRank) {
        currentData = currentRank + 1;

        return currentData;
        }, function(error, committed, snapshot) {
            if (error) {
                // Error message
                alert('Koneksi anda tidak stabil' + error);
            } else {
                // Send the Data
                alert('Nomor Antrian: ' + snapshot.val() + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                // Push the prompt data
                bpg_pasien.push().set({
                  nama: nama,
                  nik: nik,
                  no_antri: snapshot.val(),
                  poli: 'BPG'
                })
            }
        });
      break;
    case 'kia':
      bpu.transaction(function(currentRank) {
        currentData = currentRank + 1;

        return currentData;
        }, function(error, committed, snapshot) {
            if (error) {
                // Error message
                alert('Koneksi anda tidak stabil' + error);
            } else {
                // Send the Data
                alert('Nomor Antrian: ' + snapshot.val() + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                // Push the prompt data
                bpu_pasien.push().set({
                  nama: nama,
                  nik: nik,
                  no_antri: snapshot.val(),
                  poli: 'KIA'
                })
            }
        });
      break;
  }
}
