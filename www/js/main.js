// Firebase 
var ref = new Firebase("https://cepatsembuh.firebaseio.com/");

function faskes(nama, bpjs, kecamatan, antrian) {
  this.nama = nama;
  this.bpjs = bpjs;
  this.kecamtan = kecamatan;
  this.antrian = antrian;
};