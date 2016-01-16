function data() {
	var ref = new Firebase("https://cepatsembuh.firebaseio.com/");

	var bpjs-rs = document.getElementbyId("bpjs-rs").value;
	var bpjs-puskesmas = document.getElementbyId("bpjs-puskesmas").value;

	ref.push(bpjs-rs);
	ref.push(bpjs-puskesmas);	
}