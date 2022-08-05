let InputFormadd = document.querySelector('.inputform');
let ButtonAdd = document.querySelector('.button-add');
let UlListadd = document.querySelector('.ullist');

ButtonAdd.addEventListener('click', function () {
    let value = InputFormadd.value;
    let li = document.createElement('li');
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function(){
    li.remove();
})

    li.textContent = value;

    li.appendChild(deleteButton);

    UlListadd.appendChild(li);

    InputFormadd.value = ' ';
})

document.querySelector('.Clearall').addEventListener('click',function(x){
    UlListadd.innerHTML = ' ';
})
