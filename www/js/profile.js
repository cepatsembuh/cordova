function doctorProfile(nama, gambar, lulusan, tahun) {
  swal({
    title: "Dr. " + nama,
    imageUrl: gambar,
    text: "Lulusan: " + lulusan + "<br>" + "Tahun: " + tahun,
    html: true
  })
  console.log('Gambar: ' + gambar)
}
