###
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
###

# Firebase go online whenever the application is open
# Get no antrian function

getNoAntri = (tipe, username, name) ->
  # Define firebase URL
  faskesRef = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username)
  # Log firebase URL
  console.log 'Url :' + 'https://cepatsembuh.firebaseio.com/' + tipe + '/faskes/' + username
  # Warn user that this fiture need internet
  alert 'Fitur ini membutuhkan internet untuk mengambil data'
  # Confirmation
  alert 'Mohon konfirmasi ulang'
  nama = prompt('Masukan nama')
  nik = prompt('Masukan NIK:')
  if nama != '' or nik.length != 16
    pasien = new Firebase('https://cepatsembuh.firebaseio.com/' + tipe + '/pasien/')
    # Initialize data
    faskesRef.on 'value', (snapshot) ->
      # Update variables
      data = snapshot.val().antrian
      one = 1
      sum = data + one
      # Update nomor antrian
      faskesRef.update
        nama: name
        antrian: sum
      # Print data
      alert 'No antrian: ' + snapshot.val().antrian
      # Push data to firebase
      pasien.push().set
        nama: nama
        nomor_antrian: snapshot.val().antrian
      return
  else
    # Error message
    alert 'Input anda tidak valid. \n Anda tidak bisa mendapatkan nomor antrian'
  return

document.addEventListener 'deviceready', ->
  Firebase.goOnline()
  return
# Not available faskes
$('#not-available').on 'click', ->
  alert 'Faskes is not available'
  return
