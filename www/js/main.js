var ref = new Firebase('https://cepatsembuh.firebaseio.com'),
	puskesmas = ref.child('puskesmas'),
	faskes = puskesmas.child('faskes');

function antrian(){
 var nama = $('#name').val(),
     nik = $('#nik').val(),
     no = $('#no').val();

 var antrian = faskes.child('no_antrian');
 
 antrian.transaction(function(currentRank){
  current = currentRank;
  next = currentRank + 1;

  alert('Nomor Antrian Anda:' + current + '\n' + '\n' + '*Tunjukan nomor antrian ini kepada puskesmas');
 
 var pasien = faskes.child('pasien');
 pasien.push({
  nama: nama,
  nik: nik,
  no: no
 })

 return next;
 })
}

function open(){
  window.location.href = 'option.html'
}
