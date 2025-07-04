const i1 = "kertas"; const i2 = "batu"; const i3 = "gunting";
const o1 = "menang"; const o2 = "setara"; const o3 = "kalah";
document.getElementById("gunting").addEventListener("click", function(){
    if (fungsiacak() === "gunting") {
        templatemsg() = `Anda memilih ${i3} dan komputer memilih ${i3} maka anda ${o2}`;
    } else if (fungsiacak() === "batu") {
        templatemsg() = `Anda memilih ${i3} dan komputer memilih ${i2} maka anda ${o3}`;
    } else {
        templatemsg() = `Anda memilih ${i3} dan komputer memilih ${i1} maka anda ${o1}`
    }
});
document.getElementById("batu").addEventListener("click", function(){
    if (fungsiacak() === "gunting") {
        templatemsg() = `Anda memilih ${i2} dan komputer memilih ${i3} maka anda ${o1}`
    } else if (fungsiacak() === "batu") {
        templatemsg() = `Anda memilih ${i2} dan komputer memilih ${i2} maka anda ${o2}`
    } else {
        templatemsg() = `Anda memilih ${i2} dan komputer memilih ${i1} maka anda ${o3}`
    }    
});
document.getElementById("kertas").addEventListener("click", function(){
    fungsiacak();
    if (fungsiacak() === "gunting") {
        templatemsg() = `Anda memilih ${i1} dan komputer memilih ${i3} maka anda ${o3}`
    } else if (fungsiacak() === "batu") {
        templatemsg() = `Anda memilih ${i1} dan komputer memilih ${i2} maka anda ${o1}`
    } else {
        templatemsg() = `Anda memilih ${i1} dan komputer memilih ${i1} maka anda ${o2}`
    }    
});
function fungsiacak() {
    let pilihan = ["kertas","batu","gunting"];
    let acak = [Math.floor(Math.random() * 3)];
    let pilihanKomputer = pilihan[acak];   
    return pilihanKomputer;
}
function templatemsg() {
    document.getElementById("hasil").innerHTML
}
