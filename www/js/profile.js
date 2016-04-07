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
