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
  breanna = new Firebase('http://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username),
 antri = new Firebase('http://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username + '/antrian');
 pasien = breanna.child('pasien'),

 // Date
 date = new Date(),
 year = date.getFullYear(),
 month = date.getMonth() + 1,
 day = date.getDate(),
 right_now = year + '-' + month + '-' + day,
 today = breanna.child(right_now),

 // Get data
 get = 'Getting data..';
 console.log(get);

 alert('Mohon konfirmasi ulang');

 // Prompt
 var nama = prompt('Nama: '),
     nik = prompt('NIK: ');

 if (nama === '' || nik.length != 16 || typeof Number(nik) !== 'number' || Number(nik) == 'NaN') {
   alert('Input tidak valid');
 } else {
   antri.transaction(function(currentRank) {
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
           today.push().set({
             nama: nama,
             nik: nik,
             no_antri: snapshot.val()
           })
       }
   });
 }
 console.log('Data is ready');
}
