var kebutuhan = "";
var kompleksitas = "";
var waktu_delivery = "";
var jumlah_tim = "";
var keterampilan_tim = "";
var klien_terlibat = "";


function getter(){
    kebutuhan = document.querySelector('input[name="kebutuhan"]:checked').value;
    kompleksitas = document.querySelector('input[name="kompleksitas"]:checked').value;
    waktu_delivery = document.querySelector('input[name="waktu-delivery"]:checked').value;
    jumlah_tim = document.querySelector('input[name="jumlah-tim"]:checked').value;
    keterampilan_tim = document.querySelector('input[name="keterampilan-tim"]:checked').value;
    klien_terlibat = document.querySelector('input[name="klien-terlibat"]:checked').value;
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
        window.location.replace("vshaped.html");
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

function decission(){
    getter();/*
    alert(kebutuhan);
    alert(kompleksitas);
    alert(waktu_delivery);
    alert(jumlah_tim);
    alert(keterampilan_tim);
    alert(klien_terlibat);
    console.log(waktu_delivery);
    //console.log(kebutuhan.kompleksitas.waktu_delivery.jumlah_tim.keterampilan_tim.klien_terlibat);*/

    if (kebutuhan == "dapat-dijelaskan"){
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