function data() {
	var url = "https://cepatsembuh.firebaseio.com/";
	var ref = new Firebase(url);
	
	// Hospital input
	var bpjs-rs $('#name-rs').val();
	var bpjs-rs $('#bpjs-rs').val();
	var nik-rs $('#nik-rs').val();
	var sex-rs $('#sex-rs').val();
	var date-rs $('#date-rs').val();

	// Puskesmas input
	var name-puskesmas $('#name-puskesmas').val();
	var bpjs-puskesmas $('#bpjs-puskesmas').val();
	var nik-puskesmas $('#nik-puskesmas').val();
	var sex-puskesmas $('#sex-puskesmas').val();
	var date-puskesmas $('#date-puskesmas').val();

	ref.push(bpjs-rs);
	ref.push(bpjs-puskesmas);

	if (var bpjs-rs == '') {
		return false;
		console.log('BPJS input is empty')
	};	
	else {
		return true;
	}
	if (var bpjs-puskesmas == '') {
		return false;
		console.log('BPJS input is empty')
	};
	else {
		return true;
	}
}