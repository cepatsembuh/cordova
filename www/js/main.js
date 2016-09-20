 'use strict';
 var config = {
    apiKey: "fFRaVtFRskcRYpFdbbLC6NaGz8JSEpGPggQrudgF",
    authDomain: "cepatsembuh.firebaseapp.com",
    databaseURL: "https://cepatsembuh.firebaseio.com",
  };
  firebase.initializeApp(config);
	
	var ref = firebase.database().ref(),
			puskesmas = ref.child('puskesmas'),
			faskes = puskesmas.child('kelapa_gading'),
      pasien = faskes.child('pasien');

var date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  right_now = year + '-' + month + '-' + day;

 // Poli child's
 var bpu = firebase.database().ref('puskesmas/kelapa_gading/bpu'),
     bpg = firebase.database().ref('puskesmas/kelapa_gading/bpg'),
     kia = firebase.database().ref('puskesmas/kelapa_gading/kia');

function antrian() {
 'use strict';
  var nama = $('#name').val();
  var nik = $('#nik').val();
  var no = $('#no').val();
  var poli = $('#poli').val();

 if (poli == null) {
  alert('Anda belum memilih poli');
 } else if (nama == '') {
  alert('Anda belum memasukan nama anda');
 } else if (nik.length != 16) {
  alert('Anda belum memasukan nik');
 } if (no.length != 20) {
  alert('Anda belum memasukan nomor BPJS');
 } else if (poli == 'bpu') {
    bpu.transaction(function(currentRank) {      
      return currentRank + 1;
    }, function(error, commited, snapshot) {
        if (error) {
          alert('Error')
        } else {
          var today = firebase.database().ref('puskesmas/kelapa_gading/pasien/' + right_now + '/bpu');

          console.log('HELL YEAH!')
          alert('Anda terdaftar pada: ' + right_now + "\n" + "Nomor antrian anda: " + snapshot.val() + "\n" + "Anda akan dilayani pada waktu: " + "11:00 AM - 11:10 AM")

          today.push().set({
            nama: nama,
            nik: nik,
            no: no,
            antrian: snapshot.val(),
            poli: 'bpu'
          })          
        }
    })
 } else if (poli == 'bpg') {
    bpg.transaction(function(currentRank) {      
      return currentRank + 1;
    }, function(error, commited, snapshot) {
        if (error) {
          alert('Error')
        } else {
          var today = firebase.database().ref('puskesmas/kelapa_gading/pasien/' + right_now + '/bpg');

          console.log('HELL YEAH!')
          alert('Anda terdaftar pada: ' + right_now + "\n" + "Nomor antrian anda: " + snapshot.val())
          
          today.push().set({
            nama: nama,
            nik: nik,
            no: no,
            antrian: snapshot.val(),
            poli: 'bpg'
          })          
        }
    })
 } else if (poli == 'kia') {
    kia.transaction(function(currentRank) {      
      return currentRank + 1;
    }, function(error, commited, snapshot) {
        if (error) {
          alert('Error')
        } else {
          var today = firebase.database().ref('puskesmas/kelapa_gading/pasien/' + right_now + '/kia');

          console.log('HELL YEAH!')
          alert('Anda terdaftar pada: ' + right_now + "\n" + "Nomor antrian anda: " + snapshot.val())
          
          today.push().set({
            nama: nama,
            nik: nik,
            no: no,
            antrian: snapshot.val(),
            poli: 'kia'
          })          
        }
    })
 }
}