document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {      
    console.log('Device is ready')
};

function jantung() {
    console.log('Serangan Jantung')                
    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.598033&long=106.797336&pname=Lorem&stype=jantung&phone=08123456789", success: function(result){
    }});
    alert("Bantuan sedang dalam perjalanan ke lokasi anda." + "\n" + "Bertahan & berdoalah :)")
}

function bencana() {
    console.log('Bencana Alam')   
    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.536368&long=106.796907&pname=Lorem&stype=bencana&phone=08123456789", success: function(result){
    }});
    alert("Bantuan sedang dalam perjalanan ke lokasi anda." + "\n" + "Bertahan & berdoalah :)")
}

function luka() {
    console.log('Kecelakaan/Luka')              
    $.ajax({url: "http://192.168.0.104/cekatan/api.php?lat=-6.598033&long=106.797336&pname=Lorem&stype=luka&phone=08123456789", success: function(result){
    }});
    alert("Bantuan sedang dalam perjalanan ke lokasi anda." + "\n" + "Bertahan & berdoalah :)")
}