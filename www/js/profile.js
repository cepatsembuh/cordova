/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Firebase go online whenever the application is open
document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Not available faskes
$('#not-available').on('click', function() {
	alert("Faskes is not available")
})

// Get no antrian function
function getNoAntri(tipe, username, name) {
  var faskesRef = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
  console.log('Url :' + "https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username + '/antrian');
	alert('Fitur ini membutuhkan internet untuk mengambil data');
  faskesRef.on("value", function(snapshot) {
    alert('No antrian: ' + snapshot.val());
    var data = snapshot.val().antrian;
    var plus = 1;
    var glee = data + plus
    console.log('Updating data.. ');
    username.set({
      antrian: glee,
      nama: name
    });
  });
}
