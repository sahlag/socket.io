console.log('ouverture de tchat coté client');

let socket = io();

let formConnection = document.getElementById('form-connection');
let formMessage = document.getElementById('form-message');
let inputName = document.getElementById('name');

let inputMessage = document.getElementById('message');
let sectionConnection = document.getElementById('sectionConnection');
let sectionMessage = document.getElementById('sectionMessage');
let divMessage = document.getElementById('messages');


// Gestion de l'authentification.
formConnection.addEventListener('submit', (event)=>{
  event.preventDefault();
  console.log('Authentification');
  const username = inputName.value;

// Emession de l'événement vers le serveur
  socket.emit('newUser', username);

  
    // Gestion de laffichage
    sectionConnection.style.display ='none';
    sectionMessage.style.display ='block';
});

// Gestion de message.
formMessage.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Envoi d'un message");
    const message = inputMessage.value;
  
 // Emession de l'événement vers le serveur
    socket.emit('newMessage', message);

  });

  socket.on('new-message',(username, message)=>{
      console.log(`Réception d'un message`);
      

      //création d'un paragraphe
      const monParagraphe = document.createElement('p');
      monParagraphe.innerText = `${ username } : ${ message }`;
     // Ajouter le paragraphe à la div portant l'id 'messages'
      divMessage.appendChild(monParagraphe);

  })

