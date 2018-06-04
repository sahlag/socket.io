console.log('ouverture de tchat coté client');

let socket = io();

let formConnection = document.getElementById('form-connection');
let inputName = document.getElementById('name');

formConnection.addEventListener('submit', (event)=>{
  event.preventDefault();
  console.log('Authentification');
  const username = inputName.value;

  // Emession de l'événement vers le serveur
  socket.emit('newUser', username);
})