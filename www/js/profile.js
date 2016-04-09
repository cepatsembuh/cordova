/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Not available faskes
$('#not-available').on('click', function() {
	alert("Faskes is not available")
})

// Select faskes function
function selectFaskes(username) {
  window.location.href = '../' + 'faskes/' + username + '.html'
}

// Get no antrian function
function getNoAntri(tipe, username) {
  var faskesRef = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
  console.log('Url :' + "https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
	alert('Fitur ini membutuhkan internet untuk mengambil data..');
  faskesRef.on("value", function(snapshot) {
    alert('No antrian: ' + snapshot.val());
  });
}
