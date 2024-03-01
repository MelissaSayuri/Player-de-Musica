const baseMusicas = [
    {
        'name': 'Anonymous Choir - Unus Ex Discipulis Meis',
        'artist': 'Anonymous',
        'path': './src/audio/Anonymous_Choir_-_Unus_Ex_Discipulis_Meis.mp3',
        'album': '1 Good Enough',
    },
    {
        'name': 'Felipe Sarro - C Schumann Scherzo in C minor Op 14',
        'artist': 'Anonymous',
        'path': './src/audio/Felipe_Sarro_-_11_-_C_Schumann_Scherzo_in_C_minor_Op_14.mp3',
        'album': '2 Good Enough',
    },
    {
        'name': 'James Scott - Frog Legs Rag 1906 piano roll',
        'artist': 'Anonymous',
        'path': './src/audio/James_Scott_-_01_-_Frog_Legs_Rag_1906_piano_roll.mp3',
        'album': '3 Good Enough',
    }
];

const listaMusicas = document.querySelector('.listaMusicas');

const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;

function construirPlaylist(musica){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);
}


for(let contator = 0; contator < baseMusicas.length; contator++){
    construirPlaylist(baseMusicas[contador], contador);
}



function tocarMusica({
    
})