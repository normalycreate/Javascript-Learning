const whatDYD = [];

function addTask() {
    const whatDoInput = document.getElementById('whatForList');
    const doing = whatDoInput.value;

    whatDYD.push(doing);
    console.log(whatDYD);
    whatDoInput.value = null;
};           
