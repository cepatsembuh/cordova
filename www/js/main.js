function data() {
	var url = "https://cepatsembuh.firebaseio.com/";
	var ref = new Firebase(url);
	
	var bpjs-rs $('#bpjs-rs').val();
	var bpjs-puskesmas $('#bpjs-puskesmas').val();

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