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

/* function updateData(tipe, username, name) {
  var faskesRef = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username);
  faskesRef.on("value", function(snapshot) {
    data = snapshot.val().antrian;
    plus = 1;
    glee = data + plus
    console.log('Updating data.. ');
    faskesRef.set({
      antrian: glee,
      nama: name
    });
  })
} */


// Get no antrian function
function getNoAntri(tipe, username, name) {
  var faskesRef = new Firebase("https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username);
  console.log('Url :' + "https://cepatsembuh.firebaseio.com/" + tipe + "/faskes/" + username);
	alert('Fitur ini membutuhkan internet untuk mengambil data');
  faskesRef.on("value", function(snapshot) {
    alert('No antrian: ' + snapshot.val().antrian);
  });
  // updateData(tipe, username, name);
}
