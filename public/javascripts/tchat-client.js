console.log('ouverture de tchat coté client');

let socket = io();

let formConnection = document.getElementById('form-connection');
let formMessage = document.getElementById('form-message');
let inputName = document.getElementById('name');
let inputMessage = document.getElementById('name');

// Gestion de l'authentification.
formConnection.addEventListener('submit', (event)=>{
  event.preventDefault();
  console.log('Authentification');
  const username = inputName.value;

// Emession de l'événement vers le serveur
  socket.emit('newUser', username);
})

// Gestion de message.
formMessage.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Envoi d'un message");
    const message = inputMessage.value;
  
 // Emession de l'événement vers le serveur
    socket.emit('newMessage', message);
  })

