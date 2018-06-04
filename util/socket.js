

// tchat avec socket.io
module.exports.tchat = function tchat(io) {
    io.on('connection', (socket) =>{
        console.log('Nouvel utilisateur connecté !');

    let identity = null;
    
    // Traitement de l'évenement newUser
    socket.on('newUser', (username)=>{
        console.log('Authentification (coté serveur)');
        console.log(username);
        identity = username;
    });

   // Traitement de l'évenement newUser
   socket.on('newMessage', (message)=>{
    console.log(`${identity} a envoyer un message`);
    // on difuse le message  a tous les clients connectés
   })
});
}