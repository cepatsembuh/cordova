var ref = new Firebase('https://cepatsembuh.firebaseio.com');
var puskesmas = ref.child('puskesmas'),
  	faskes = puskesmas.child('kelapa_gading');

function antrian(){
 var ref = new Firebase('https://cepatsembuh.firebaseio.com'),
    puskesmas = ref.child('puskesmas'),
    faskes = puskesmas.child('kelapa_gading'),
    nama = $('#name').val(),
    nik = $('#nik').val(),
    no = $('#no').val(),
    poli = $('#poli').val();

 var bpu = faskes.child('bpu'),
     bpg = faskes.child('bpg'),
     kia = faskes.child('kia');
 
 if (poli == 'null' || nama == '' || nik.length != 16 || no.length != 20) {
  alert('Input anda tidak valid, mohon cek lagi')
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
       no_antrian: current,
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
        no_antrian: current,
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
        no_antrian: current,
        poli: 'kia'
       })
   })
 }
}
