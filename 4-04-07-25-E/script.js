console.log("Kode javascript berhasil dijalakankan");

const inputWrite = document.querySelector(".writeForList");
const displayIt = document.querySelector(".displayedList");
const submitIt = document.querySelector(".buttonSend");

document.querySelector(".buttonSend").addEventListener("click", function(){
    const taskText = inputWrite.value;
    if (taskText.trim() === "") {
        alert("Teks yang anda masukan kosong, tolong diisi!");
        return;
    }
    let elementOutput = document.createElement('p');
    elementOutput.classList.add('addNewListView');
    elementOutput.textContent = taskText;
    displayIt.appendChild(elementOutput);
    inputWrite.value = "";
});
