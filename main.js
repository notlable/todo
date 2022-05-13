const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');

const input = document.querySelector('input');



const addTask = e => {

    e.preventDefault();
    const titleTask = input.value;

    if (titleTask === "") return alert('Zadanie nie moze byc puste');

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>";
    ul.appendChild(task);
    input.value = "";
    taskNumber.textContent = document.querySelectorAll('.task').length;
    task.querySelector('button').addEventListener('click', removeTask);
}


form.addEventListener('submit', addTask)