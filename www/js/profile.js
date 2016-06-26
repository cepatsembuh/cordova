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
      dipper = $('#durasi').val(),
      poli = $('#poli').val();

  dipcifica = new Firebase('https://cepatsembuh.firebaseio.com/puskesmas/faskes/' + username),

  date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  right_now = year + '-' + month + '-' + day,
  today = dipcifica.child(right_now),

  hour = dipcifica.child('jam'),
  minute = dipcifica.child('menit'),

  bpu = dipcifica.child('bpu'),
  bpg = dipcifica.child('bpg'),
  kia = dipcifica.child('kia'),

  bpu_pasien = today.child('bpu-pasien'),
  bpg_pasien = today.child('bpg-pasien'),
  kia_pasien = today.child('kia-pasien');

  if (username !== 'kelapa_gading') {
    alert('Fitur ini tidak tersedia di puskesmas anda')
  } else {
    if (nama === '' || nik.length != 16) {
      alert('Input tidak valid')
    } else {
      minute.transaction(function(currentRank){
        currentData = Number(currentRank) + Number(dipper);
        return currentData;
      })
      switch (poli) {
        // BPU
        case 'bpu':
          // Friendly message
          alert('Mendaftarkan anda..');
          
          bpu.transaction(function(currentRank) {
            currentData = currentRank + 1;

            return currentData;
            }, function(error, committed, snapshot) {
                if (error) {
                    // Error message
                    alert('Terjadi kesahalah saat mengambil data');
                } else {
                    // Send the Data
                    alert('Nomor Antrian: ' + snapshot.val() + '\n' + 'Datanglah pada: ' + String(right_now) + '\n' + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                    // Push the prompt data
                    bpu_pasien.push().set({
                      nama: nama,
                      nik: nik,
                      no_antri: snapshot.val(),
                      poli: 'BPU',
                      jam: hour,
                      menit: minute
                    })
                }
            });
          break;

        // BPG
        case 'bpg':
          // Friendly message
          alert('Mendaftarkan anda..');
          
          bpg.transaction(function(currentRank) {
            currentData = currentRank + 1;

            return currentData;
            }, function(error, committed, snapshot) {
                if (error) {
                    // Error message
                    alert('Terjadi kesahalah saat mengambil data');
                } else {
                    // Send the Data
                    alert('Nomor Antrian: ' + snapshot.val() + '\n' + 'Datanglah pada: ' + String(right_now) + '\n' + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                    // Push the prompt data
                    bpg_pasien.push().set({
                      nama: nama,
                      nik: nik,
                      no_antri: snapshot.val(),
                      poli: 'BPG',
                      jam: hour,
                      menit: minute
                    })
                }
            });
          break;

        // KIA
        case 'kia':
          // Friendly message
          alert('Mendaftarkan anda..');
          
          kia.transaction(function(currentRank) {
            currentData = currentRank + 1;

            return currentData;
            }, function(error, committed, snapshot) {
                if (error) {
                    // Error message
                    alert('Terjadi kesahalah saat mengambil data');
                } else {
                    // Send the Data
                    alert('Nomor Antrian: ' + snapshot.val() + '\n' + 'Datanglah pada: ' + String(right_now) + '\n' + '\n' + '*Harap screenshot ini dan tunjukan ke faskes anda');

                    // Push the prompt data
                    kia_pasien.push().set({
                      nama: nama,
                      nik: nik,
                      no_antri: snapshot.val(),
                      poli: 'KIA',
                      jam: hour,
                      menit: minute
                    })
                }
            });
          break;

          // Null handler
          case null:
            alert('Anda belum memilih poli');
            break;
      }
    }
  }
}
