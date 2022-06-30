
const nome = document.getElementById('nome');
const cidade = document.getElementById('cidade');
const roboNome = document.getElementById('roboNome');
const enviar = document.getElementById('enviar');


//MODAL JS ------------------------------------------------------------
const getElement=(...queries) => document.querySelector(...queries);
const button = getElement('.open-modal-button');
const container = getElement('.modal-container');
const modal = getElement('.modal');
const activeModalClass = "modal-show"
const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

enviar.addEventListener('click', (evento) => {
   evento.preventDefault();
   openModal();
   criarElemento();
});

container.addEventListener('click', (evento) =>{
   if (modal.contains(evento.target)) return;
   closeModal();

});

//CRIAÇÃO DE ELEMENTO -------------------


function criarElemento(){
   const localAdiciona =document.querySelector('#localAdicionado');
   let elemento = document.createElement('h1');
   elemento.textContent = nome.value + ', ENCONTRAMOS UM ATAQUE EM ' + cidade.value + ' !!';
   localAdiciona.appendChild(elemento);



}

