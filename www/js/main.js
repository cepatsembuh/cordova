function data() {
	var url = "https://cepatsembuh.firebaseio.com/";
	var ref = new Firebase(url);
	
	// Hospital input
	var rs = document.getElementById('hospital-form').value)();
	var name-rs = document.getElementById('name-rs').value();
	var bpjs-rs = document.getElementById('bpjs-rs').value();
	var nik-rs = document.getElementById('nik-rs').value();
	var sex-rs = document.getElementById('sex-rs').value();
	var date-rs = document.getElementById('date-rs').value();

	// Puskesmas input
	var puskesmas = document.getElementById('puskesmas-form').value;
	var name-puskesmas = document.getElementById('name-puskesmas').value();
	var bpjs-puskesmas = document.getElementById('bpjs-puskesmas').value();
	var nik-puskesmas = document.getElementById('nik-puskesmas').value();
	var sex-puskesmas = document.getElementById('sex-puskesmas').value();
	var date-puskesmas = document.getElementById('date-puskesmas').value();

	ref.push(bpjs-rs);
	ref.push(bpjs-puskesmas);

	var rs = ref.child("rs");
	rs.set({	  
	  person: {
	    nama: name-rs,
	    bpjs: bpjs-rs,
	    nik: nik-rs,
	    sex: sex-rs,
	    date: date-rs,
	  },	  
	});

	Firebase person object for hospital
	var puskesmas = ref.child("puskesmas");
	puskesmas.set({	  
	  person: {
	    nama: name-puskesmas,
	    bpjs: bpjs-puskesmas,
	    nik: nik-puskesmas,
	    sex: sex-puskesmas,
	    date: date-puskesmas,
	  },	  
	});

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