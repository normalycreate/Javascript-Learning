const $brand = "AmbaPhone";
let $harga = 12000000; // Harga dasar untuk 1 buah AmbaPhone, tidak akan berubah.
let $jumlah = 0; // Jumlah barang yang bisa berubah.
let $totalHarga = 0; // Total harga akhir yang bisa berubah

//ini harganya
document.getElementById("harga").addEventListener("click", function(){
if($jumlah > 0) {
    $totalHarga = $jumlah * $harga;
    console.log(`Harga AmbaPhone adalah ${$totalHarga} rupiah`);
    document.getElementById("harga-h2").innerHTML = `Harga ${$brand} adalah ${$totalHarga.toLocaleString('id-ID')}`;
} else {
    console.log(`Anda hanya memasukan ${$jumlah} barang dan itu tidak valid!`);
    document.getElementById("error-msg").innerHTML = `Anda hanya memasukan ${$jumlah} barang dan itu tidak valid!`;
}
});

//ini kurang
document.getElementById("kurang").addEventListener("click", function(){
    $jumlah = $jumlah - 1;
    console.log(`Kamu mengurangi 1 barang sehingga menjadi : ${$jumlah} barang`);
    document.getElementById("jumlah-h2").innerHTML = `Kamu mengurangi 1 barang sehingga menjadi : ${$jumlah} barang`;
});

//ini tambah
document.getElementById("tambah").addEventListener("click", function(){
    $jumlah = $jumlah + 1;
    console.log(`Kamu memasukan : ${$jumlah} barang`);
    document.getElementById("jumlah-h2").innerHTML = `Kamu memasukan : ${$jumlah} barang`;
});

//ini jumlah barang
document.getElementById("jumlah").addEventListener("click", function(){
    console.log(`Kamu telah memasukan : ${$jumlah} barang`);
    document.getElementById("jumlah-h2").innerHTML = `Kamu telah memasukan : ${$jumlah} barang`;
});

//ini buat resel variabel
document.getElementById("hapus").addEventListener("click", function() {
    $jumlah = 0;
    $harga = 12000000;
    $totalHarga = 0;
    console.log(`Barang belanjaan sudah direset`);
    document.getElementById("harga-h2").innerHTML = `Harga ${$brand} sudah direset menjadi ${$harga.toLocaleString('id-ID')}`;
    document.getElementById("jumlah-h2").innerHTML = `Jumlah barang sudah direset menjadi ${$jumlah}`;
    document.getElementById("error-msg").innerHTML = "";
});