//Preparing the variable to hold form value
var kebutuhan = "";
var kompleksitas = "";
var waktu_delivery = "";
var jumlah_tim = "";
var keterampilan_tim = "";
var klien_terlibat = "";

//Getting form value
function getter(){
    //alert('awal getter');
    
    //Checking form value, if user don't fill it, then null
    if (document.querySelector('input[name="kebutuhan"]:checked')){
        kebutuhan = document.querySelector('input[name="kebutuhan"]:checked').value;
    }else {
        kebutuhan = null;
    }
    console.log(kebutuhan);
    
    if (document.querySelector('input[name="kompleksitas"]:checked')){
        kompleksitas = document.querySelector('input[name="kompleksitas"]:checked').value;
    }else {
        kompleksitas = null;
    }
    console.log(kompleksitas);
    
    if (document.querySelector('input[name="waktu-delivery"]:checked')){
        waktu_delivery = document.querySelector('input[name="waktu-delivery"]:checked').value;
    }else {
        waktu_delivery = null;
    }
    console.log(waktu_delivery);

    if (document.querySelector('input[name="jumlah-tim"]:checked')){
        jumlah_tim = document.querySelector('input[name="jumlah-tim"]:checked').value;
    }else {
        jumlah_tim = null;
    }
    console.log(jumlah_tim);
    
    if (document.querySelector('input[name="keterampilan-tim"]:checked')){
        keterampilan_tim = document.querySelector('input[name="keterampilan-tim"]:checked').value;
    }else {
        keterampilan_tim = null;
    }
    console.log(keterampilan_tim);
    
    if (document.querySelector('input[name="klien-terlibat"]:checked')){
        klien_terlibat = document.querySelector('input[name="klien-terlibat"]:checked').value;
    }else {
        keterampilan_tim = null;
    }
    console.log(klien_terlibat);
    //alert('getter, dieksekusi');
}

function clear_Variable(){
    alert(kebutuhan);
    alert(kompleksitas);
    alert(waktu_delivery);
    alert(jumlah_tim);
    alert(keterampilan_tim);
    alert(klien_terlibat);
}

function tampil(){
    methode = document.getElementById("metode").value;
    if (methode == "incremental"){
        window.location.replace("incremental.html");
    }
    else if (methode == "prototype"){
        window.location.replace("prototype.html");
    }
    else if (methode == "rad"){
        window.location.replace("rad.html");
    }
    else if (methode == "scrum"){
        window.location.replace("scrum.html");
    }
    else if (methode == "spiral"){
        window.location.replace("spiral.html");
    }
    else if (methode == "vshaped"){
        window.location.replace("vshaped.html");
    }
    else if (methode == "waterfall"){
        window.location.replace("waterfall.html");
    }
    else{
        alert("Pilih Metode");
    }
}

//Running getter function to get the form value
function decission(){
    console.log('decission,dieksekusi')
    getter();

    if (kebutuhan == null || kompleksitas == null || waktu_delivery == null || jumlah_tim == null || keterampilan_tim == null || klien_terlibat == null){
        /*alert(kebutuhan);
        alert(kompleksitas);
        alert(waktu_delivery);
        alert(jumlah_tim);
        alert(keterampilan_tim);
        alert(klien_terlibat);*/
        console.log('else terakhir');
        alert("Harap mengisi semua form");
    }
    else if (kebutuhan == "dapat-dijelaskan"){
        if (kompleksitas == "sederhana"){
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html")
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            Window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }else if (kompleksitas == "kompleks"){
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("rad.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("rad.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace('rad.html');
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("rad..html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html")
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }else if (kompleksitas == "sangat-kompleks"){                                                                           //HERE
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("rad.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace('rad.html');
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.onload.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("watefall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("rad.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("incremental.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("incremental.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("vshaped.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("waterfall.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }
    }else if(kebutuhan == "belum-jelas"){
        if (kompleksitas == "sederhana"){
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("mo-result.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }else if (kompleksitas == "kompleks"){
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("prototype.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }else if (kompleksitas == "sangat-kompleks"){                                                                           //HERE
            if (waktu_delivery == "<1bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "1-3bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("scrum.html")
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "4-6bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }else if (waktu_delivery == "6-12bulan"){
                if (jumlah_tim == "<12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("prototype.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                          alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }else if (jumlah_tim == ">12orang"){
                    if (keterampilan_tim == "berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "campuran"){
                        if (klien_terlibat == "terlibat"){
                            window.location.replace("spiral.html");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            window.location.replace("scrum.html");
                        }
                    }else if (keterampilan_tim == "tidak-berpengalaman"){
                        if (klien_terlibat == "terlibat"){
                            alert("Tidak ada metodologi yang cocok");
                        }else if (klien_terlibat == "tidak-terlibat"){
                            alert("Tidak ada metodologi yang cocok");
                        }
                    }
                }
            }
        }
    }
}