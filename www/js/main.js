

function antrian(){
'use strict';
 var ref = new Firebase('https://cepatsembuh.firebaseio.com'),
     puskesmas = ref.child('puskesmas'),
     faskes = puskesmas.child('kelapa_gading');

  // Input's
  var nama = $('#name').val(),
      nik = $('#nik').val(),
      no = $('#no').val(),
      poli = $('#poli').val();

 // Poli child's
 var bpu = faskes.child('bpu'),
     bpg = faskes.child('bpg'),
     kia = faskes.child('kia');
 
 if (poli == 'null') {
  alert('Anda belum memilih poli');
 } else if (nama == '') {
  alert('Anda belum memasukan nama anda');
 } else if (nik.length != 16) {
  alert('Anda belum memasukan nik');
 } else if (no.length != 20) {
  alert('Anda belum memasukan nomor BPJS');
 } else if (poli == 'bpu') {
  bpu.transaction(function(currentRank){
    current = currentRank;
    next = currentRank + 1;

  return next;
 }, function(error, snapshot, committed){
      alert('Nomor Antrian Anda:' + next + '\n' + '\n' + '*Tunjukan nomor antrian ini kepada puskesmas'); 
     
      var pasien = faskes.child('pasien');
      pasien.push().set({
       nama: nama,
       nik: nik,
       no: no,
       no_antrian: next,
       poli: 'bpu'
      })
  })
 } else if (poli == 'bpg'){
   bpg.transaction(function(currentRank){
     current = currentRank;
     next = currentRank + 1;

     return next;
  }, function(error, snapshot, committed){
       alert('Nomor Antrian Anda:' + next + '\n' + '\n' + '*Tunjukan nomor antrian ini kepada puskesmas');
      
       var pasien = faskes.child('pasien');
       pasien.push().set({
        nama: nama,
        nik: nik,
        no: no,
        no_antrian: next,
        poli: 'bpg'
       })
   })
 } else if (poli == 'kia'){
   kia.transaction(function(currentRank){
     current = currentRank;
     next = currentRank + 1;

     return next;
  }, function(error, snapshot, committed){
       alert('Nomor Antrian Anda:' + next + '\n' + '\n' + '*Tunjukan nomor antrian ini kepada puskesmas');
      
       var pasien = faskes.child('pasien');
       pasien.push().set({
        nama: nama,
        nik: nik,
        no: no,
        no_antrian: next,
        poli: 'kia'
       })
   })
 }
}
