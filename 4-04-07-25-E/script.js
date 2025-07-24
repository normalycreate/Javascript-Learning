console.log("Kode javascript berhasil dijalakankan");

// --- 1. Seleksi Elemen ---
// Pastikan di HTML Anda ada <form id="thisForm">
const thisForm = document.getElementById("thisForm"); 
const inputWrite = document.querySelector(".writeForList");
const displayIt = document.querySelector(".displayedList");
// Variabel `submitIt` tidak diperlukan jika kita menggunakan event 'submit' pada form

// --- 2. Event Listener untuk Menambah Tugas ---
thisForm.addEventListener("submit", function(event) {
    event.preventDefault();

    //Bagian taskText ini penting
    const taskText = inputWrite.value.trim();
    if (taskText === "") {
        alert("Teks yang anda masukan kosong, tolong diisi!");
        return;
    }

    const taskElement = document.createElement('p');
    taskElement.classList.add('addNewListView');

    const groupSpan = document.createElement('span');
    groupSpan.textContent = taskText;
    
    const hapusTombol = document.createElement('button');
    hapusTombol.textContent = 'Hapus';
    hapusTombol.classList.add('deleteButton'); // Typo corrected
    
    hapusTombol.style.cursor = 'pointer';

    taskElement.appendChild(groupSpan);
    taskElement.appendChild(hapusTombol);

    displayIt.appendChild(taskElement);

    inputWrite.value = "";
    inputWrite.focus();
});

displayIt.addEventListener('click', function(event){
    if (event.target.classList.contains('deleteButton')) {
        const sedangMenghapusList = event.target.parentElement;
        displayIt.removeChild(sedangMenghapusList);
    }
});
