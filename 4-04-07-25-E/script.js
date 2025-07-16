console.log("Kode javascript berhasil dijalakankan");

// --- 1. Seleksi Elemen ---
// Pastikan di HTML Anda ada <form id="thisForm">
const thisForm = document.getElementById("thisForm"); 
const inputWrite = document.querySelector(".writeForList");
const displayIt = document.querySelector(".displayedList");
// Variabel `submitIt` tidak diperlukan jika kita menggunakan event 'submit' pada form

// --- 2. Event Listener untuk Menambah Tugas ---
thisForm.addEventListener("submit", function(event) {
    // Mencegah form me-reload halaman
    event.preventDefault();

    const taskText = inputWrite.value.trim();
    if (taskText.trim() === "") {
        alert("Teks yang anda masukan kosong, tolong diisi!");
        return;
    }

    // Buat elemen <p> untuk satu baris tugas
    const taskElement = document.createElement('p');
    taskElement.classList.add('addNewListView');

    // Buat elemen <span> untuk teksnya saja
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    // Buat tombol 'Hapus'
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('cleanButton'); // Gunakan kelas ini untuk identifikasi

    // Gabungkan semuanya: masukkan teks dan tombol ke dalam <p>
    taskElement.appendChild(textSpan);
    taskElement.appendChild(deleteButton);

    // Masukkan baris tugas yang sudah lengkap ke dalam daftar
    displayIt.appendChild(taskElement);

    // Kosongkan input dan kembalikan fokus
    inputWrite.value = "";
    inputWrite.focus();
});

// --- 3. Event Listener untuk Menghapus Tugas (Event Delegation) ---
// Kita pasang listener di wadah utamanya, bukan di setiap tombol
displayIt.addEventListener('click', function(event) {
    // Cek apakah elemen yang diklik adalah tombol dengan kelas 'cleanButton'
    if (event.target.classList.contains('cleanButton')) {
        // Jika ya, ambil elemen induk dari tombol itu (yaitu elemen <p>)
        const taskToRemove = event.target.parentElement;
        // Hapus elemen <p> tersebut dari wadahnya
        displayIt.removeChild(taskToRemove);
    }
});
