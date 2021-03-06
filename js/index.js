
//funcao paraenviar o form

function onFormSubmit(){
var formData = readFormData();
insertNewRecord(formData);
resetForm();

}

//ler os valores de cada input

function readFormData(){
    var formData ={};
  formData['name'] = document.getElementById('name').value;
  formData['email'] = document.getElementById('email').value;
  formData['cargo'] = document.getElementById('cargo').value;
  formData['empresa'] = document.getElementById('empresa').value;
  return formData;
}

//inserir uma cell

function insertNewRecord(data){
var table = document.getElementById('tableList').getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.name;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.cargo;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.empresa;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<a class="open_button btn">Abrir</a>
                    <a onClick="onDelete(this)" class="remove_button btn">Remover</a>`;
}

//limpar os campos apos adicionar uma nova row

function resetForm(){
document.getElementById('name').value ="";
document.getElementById('email').value ="";
document.getElementById('cargo').value ="";
document.getElementById('empresa').value ="";
}

function onDelete(td){
    if(confirm('Tem certeza que deseja remover?')){
    row = td.parentElement.parentElement;
    document.getElementById('tableList').deleteRow(row.rowIndex);
    resetForm();
    }
    
}

//Fechar e abrir modal

(function(){

document.querySelector('.button_add').addEventListener('click',function(){
    document.querySelector('.modal').style.display ="flex";
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').style.display ="none";
})
})()

