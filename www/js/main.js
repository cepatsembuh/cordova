function data() {
	var url = "https://cepatsembuh.firebaseio.com/";
	var ref = new Firebase(url);

	var bpjs-rs = document.getElementbyId("bpjs-rs").value;
	var bpjs-puskesmas = document.getElementbyId("bpjs-puskesmas").value;

	ref.push(bpjs-rs);
	ref.push(bpjs-puskesmas);

	if (var bpjs-rs == '') {
		return false;
	};	
	else {
		return true;
	}
	if (var bpjs-puskesmas == '') {
		return false;
	};
	else {
		return true;
	}
}