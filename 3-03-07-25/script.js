const i1 = "kertas"; const i2 = "batu"; const i3 = "gunting";
const o1 = "menang"; const o2 = "setara"; const o3 = "kalah";
document.getElementById("gunting").addEventListener("click", function(){
    let pilihan = ["kertas","batu","gunting"];
    let acak = [Math.floor(Math.random() * 3)];
    let pilihanKomputer = pilihan[acak];
    if (pilihanKomputer === "gunting") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i3} dan komputer memilih ${i3} maka anda ${o2}`;
    } else if (pilihanKomputer === "batu") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i3} dan komputer memilih ${i2} maka anda ${o3}`;
    } else {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i3} dan komputer memilih ${i1} maka anda ${o1}`
    }
});
document.getElementById("batu").addEventListener("click", function(){
    let pilihan = ["kertas","batu","gunting"];
    let acak = [Math.floor(Math.random() * 3)];
    let pilihanKomputer = pilihan[acak];
    if (pilihanKomputer === "gunting") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i2} dan komputer memilih ${i3} maka anda ${o1}`
    } else if (pilihanKomputer === "batu") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i2} dan komputer memilih ${i2} maka anda ${o2}`
    } else {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i2} dan komputer memilih ${i1} maka anda ${o3}`
    }    
});
document.getElementById("kertas").addEventListener("click", function(){
    let pilihan = ["kertas","batu","gunting"];
    let acak = [Math.floor(Math.random() * 3)];
    let pilihanKomputer = pilihan[acak];
    if (pilihanKomputer === "gunting") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i1} dan komputer memilih ${i3} maka anda ${o3}`
    } else if (pilihanKomputer === "batu") {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i1} dan komputer memilih ${i2} maka anda ${o1}`
    } else {
        document.getElementById("hasil").innerHTML = `Anda memilih ${i1} dan komputer memilih ${i1} maka anda ${o2}`
    }    
});
//gunting = 3, batu = 2, kertas = 1
//o1 = menang, o2 = setara, o3 = kalah
//menekan tombol.
//komputer mulai mengacak angka.
//komputer menampilkan angka.
//angka menyentuk 1 input a, menyentuh 2 input b, dan menyentuk 3 input c.
//komputer menampilkan hasil.