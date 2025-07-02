function updateCalculation(value) {
    let current = document.getElementById("Calculation").innerHTML;
    return current + value;
}

// Ini merupakan bagian angka angka
document.getElementById("number1").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('1');
});
document.getElementById("number2").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('2');
});
document.getElementById("number3").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('3');
});
document.getElementById("number4").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('4');
});
document.getElementById("number5").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('5');
});
document.getElementById("number6").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('6');
});
document.getElementById("number7").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('7');
});
document.getElementById("number8").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('8');
});
document.getElementById("number9").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('9');
});

//Ini merupakan bagian dari perhitungan
document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('+');
});
document.getElementById("minus").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('-');
});
document.getElementById("modulus").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('%');
});
document.getElementById("accentrix").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('*');
});
document.getElementById("tik").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('.');
});
document.getElementById("kurungdepan").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('(');
});
document.getElementById("kurungbelakang").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation(')');
});
document.getElementById("divide").addEventListener("click", function(){
    document.getElementById("Calculation").innerHTML = updateCalculation('/');
});
document.getElementById("equal").addEventListener("click", function(){
    //Hasil yang akan ditampilkan
    let expression = document.getElementById("Calculation").innerHTML;
    try {
        let result = eval(expression);
        document.getElementById("Calculation").innerHTML = result;
    } catch (e) {
        document.getElementById("Calculation").innerHTML = "Galat Tekan Clear Untuk Mereset";
    }
    if(expression.trim() === "") {
        document.getElementById("Calculation").innerHTML = "Kosong Tekan Clear Untuk Mereset";
    }
});
document.getElementById("back").addEventListener("click", function(){
    let current = document.getElementById("Calculation").innerHTML;
    // Daftar pesan error yang harus dicek
    const errorMessages = [
        "Galat Tekan Clear Untuk Mereset",
        "Kosong Tekan Clear Untuk Mereset"
    ];
    // Jika current adalah pesan error, jangan lakukan apa-apa
    if (errorMessages.includes(current)) {
        return;
    }
    document.getElementById("Calculation").innerHTML = current.slice(0, -1);
});
document.getElementById("clear").addEventListener("click", function(){
    //Menghapus semua input
    document.getElementById("Calculation").innerHTML = "";
});