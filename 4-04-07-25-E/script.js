console.log("Kode javascript berhasil dijalakankan");

// --- 1. Seleksi Elemen ---
// Pastikan di HTML Anda ada <form id="thisForm">
const thisForm = document.getElementById("thisForm"); 
const inputWrite = document.querySelector(".writeForList");
const displayIt = document.querySelector(".displayedList");
// Variabel `submitIt` tidak diperlukan jika kita menggunakan event 'submit' pada form

// --- 2. Ini Elemen Desain ---
function createTaskElement(taskText) {
        const taskElement = document.createElement('li');
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
}

// --- 3. Membuat save atau menyimpan ---
function savingList() {
    const listIsSaving = [];
    displayIt.querySelectorAll('li span').forEach(groupSpan => {
        listIsSaving.push(groupSpan.textContent);
    });
    localStorage.setItem('listIsSaving', JSON.stringify(listIsSaving));
}

function seeWhatSomethingSave() {
    const listThatStack = JSON.parse(localStorage.getItem('listIsSaving'));
    if (listThatStack) {
        listThatStack.forEach(taskText => {
            createTaskElement(taskText);
        });
    }
}

// --- 4. Event Listener untuk Menambah Tugas ---
thisForm.addEventListener("submit", function(event) {
    event.preventDefault();

    //Bagian taskText ini penting
    const taskText = inputWrite.value.trim();
    if (taskText === "") {
        alert("Teks yang anda masukan kosong, tolong diisi!");
        return;
    }
    
    createTaskElement(taskText);
    savingList();

    inputWrite.value = "";
    inputWrite.focus();
});

displayIt.addEventListener('click', function(event){
    if (event.target.classList.contains('deleteButton')) {
        const taskToRemove = event.target.parentElement;
        displayIt.removeChild(taskToRemove);
        savingList();
    }
});

document.addEventListener('DOMContentLoaded', seeWhatSomethingSave);
