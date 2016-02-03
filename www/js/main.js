// Hospital form
$('#rs').on('submit') {
	if (window.location == 'form-rs.html') {
		window.location.href = 'state-rs.html';
	};
	else {
		alert("Please fill out the input again");
	}		
}

// Puskesmas form
$('#puskesmas').on('submit') {
	if (window.location == 'form-puskesmas.html') {
		window.location.href = 'state-puskesmas.html';
	};
	else {
		alert("Please fill out the input again");
	}		
}