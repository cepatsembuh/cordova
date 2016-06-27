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
  // Input's
  var nama = $('#nama').val(),
      nik = $('#nik').val(),
      poli = $('#poli').val();

  // Firebase ref
  dipcifica = new Firebase('https://cepatsembuh.firebaseio.com/puskesmas/faskes/' + username),

  // Date's
  date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  right_now = year + '-' + month + '-' + day,
  waktu = dipcifica.child('waktu'),
  today = dipcifica.child(right_now),

  // Poli child's
  bpu = dipcifica.child('bpu'),
  bpg = dipcifica.child('bpg'),
  kia = dipcifica.child('kia'),

  // Poli pasien's
  bpu_pasien = today.child('bpu-pasien'),
  bpg_pasien = today.child('bpg-pasien'),
  kia_pasien = today.child('kia-pasien');

  // Validate input
  if (nama === '' || nik.length != 16) {
    alert('Input tidak valid')
  } else {
    // Update minute
    waktu.transaction(function(currentRank){
      currentData = hour + ":" + minute;
      return currentData;
    })

    switch (poli) {
      // BPU
      case 'bpu':
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
                    poli: 'BPU'
                  })
              }
          });
        break;

      // BPG
      case 'bpg':
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
                    poli: 'BPG'
                  })
              }
          });
        break;

      // KIA
      case 'kia':
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
                    poli: 'KIA'
                  })
              }
          });
        break;

        // Null handler
        case null:
          alert('Anda belum memilih poli');
          break;
    }

    waktu.on('value', function(snapshot){
      data = snapshot.val();
      dipper = data.slice(-4, -5);

      console.log(sliced);
    })
  }
}
