console.log("Kode javascript berhasil dijalakankan");

const inputList = document.querySelector(".writeForList");
const submitWrite = document.getElementById("sendToDo");
const addList = document.querySelector(".displayedList");
document.getElementById("sendToDo").addEventListener("click", function() {
    const takeInput = inputList.value; //I want take input value from writeToDo
    //I want to validate the input if the input is empty it will be displayed the error message
    if (takeInput.trim() === "") {
        console.error("Input Kosong")
        alert("Input Kosong dan anda tidak memasukan input apapun!")
        return // biar fungsi beneran berhenti dan ga ada baris kosong
    } 
    //after that i want to add new HTML element in the HTML 
    const addNewLine = document.createElement('p'); // creating element base on inputList
    addNewLine.textContent = takeInput;
    addNewLine.classList.add('addNewListView'); // adding new classes in element
    addList.appendChild(addNewLine);
    //empty the input list again to fill in the next time
    inputList.value = "";
})       
