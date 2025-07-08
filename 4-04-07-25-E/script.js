//tombol mengambil nilai atau string
let button = document.getElementById("berlangganan");

//membandingkan antar string dan menambahkan interaksi click
button.addEventListener("click", function(){
    //mengecek isi string
    if (button.innerHTML === "Berlangganan") {
        button.innerHTML = `Langganan`;
    } else {
        button.innerHTML = `Berlangganan`;
    }
});