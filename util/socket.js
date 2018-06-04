

// tchat avec socket.io
module.exports.tchat = function tchat(io) {
    io.on('connection', (socket) =>{
        console.log('Nouvel utilisateur connecté !');

    // Traitement de l'évenement newUser
    socket.on('newUser', (username)=>{
        console.log('Authentification (coté serveur)');
        console.log(username);
    })
});
}