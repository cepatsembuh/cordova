// Firebase 
var ref = new Firebase("https://cepatsembuh.firebaseio.com/");

function faskes(nama, bpjs, kecamatan, antrian) {
  this.nama = nama;
  this.bpjs = bpjs;
  this.kecamtan = kecamatan;
  this.antrian = antrian;

  // Firebase
    var antri = ref.child("antri");
    antri.push().set({
      this.nama: nama,
      this.bpjs = bpjs,
      this.kecamatan = kecamatan,
      this.antrian = antrian
    });
};