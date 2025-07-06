const i1 = "kertas"; const i2 = "batu"; const i3 = "gunting";
const o1 = "menang"; const o2 = "seri"; const o3 = "kalah";
let skor = {menang: 0,kalah: 0,setara: 0};
function tambahSkor(status) {
    if (status === "menang") skor.menang++;
    else if (status === "kalah") skor.kalah++;
    else skor.setara++;
}
document.getElementById("gunting").addEventListener("click", function(){
    if (fungsiacak() === "gunting") {
        templatemsg(`Anda memilih ${i3} dan komputer memilih ${i3} maka anda ${o2}`);
        tambahSkor("setara");
    } else if (fungsiacak() === "batu") {
        templatemsg(`Anda memilih ${i3} dan komputer memilih ${i2} maka anda ${o3}`);
        tambahSkor("kalah");
    } else {
        templatemsg(`Anda memilih ${i3} dan komputer memilih ${i1} maka anda ${o1}`);
        tambahSkor("menang");
    }
    skorstat();
});
document.getElementById("batu").addEventListener("click", function(){
    if (fungsiacak() === "gunting") {
        templatemsg(`Anda memilih ${i2} dan komputer memilih ${i3} maka anda ${o1}`);
        tambahSkor("menang");
    } else if (fungsiacak() === "batu") {
        templatemsg(`Anda memilih ${i2} dan komputer memilih ${i2} maka anda ${o2}`);
        tambahSkor("setara");
    } else {
        templatemsg(`Anda memilih ${i2} dan komputer memilih ${i1} maka anda ${o3}`);
        tambahSkor("kalah");
    } 
    skorstat();   
});
document.getElementById("kertas").addEventListener("click", function(){
    fungsiacak();
    if (fungsiacak() === "gunting") {
        templatemsg(`Anda memilih ${i1} dan komputer memilih ${i3} maka anda ${o3}`);
        tambahSkor("kalah");
    } else if (fungsiacak() === "batu") {
        templatemsg(`Anda memilih ${i1} dan komputer memilih ${i2} maka anda ${o1}`);
        tambahSkor("menang");
    } else {
        templatemsg(`Anda memilih ${i1} dan komputer memilih ${i1} maka anda ${o2}`);
        tambahSkor("setara");
    }    
    skorstat();
});
document.getElementById("remove").addEventListener("click", function(){
    skor = {menang: 0,kalah: 0,setara: 0};
    skorstat();
})
function fungsiacak() {
    let pilihan = ["kertas","batu","gunting"];
    let acak = [Math.floor(Math.random() * 3)];
    let pilihanKomputer = pilihan[acak];   
    return pilihanKomputer;
}
function templatemsg(msg) {
    document.getElementById("hasil").innerHTML = msg;
}
function skorstat() {
    document.getElementById("skoring").innerHTML =
    `Anda mengalami ${skor.menang} kemenangan, ${skor.kalah} kekalahan, dan ${skor.setara} seri`;
}
