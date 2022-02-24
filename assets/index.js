//define player variables
var player1Turn = true;

var player1 = {
    "points": 0,
};

var player2 = {
    "points": 0
};

//TODO: add functionality to start button to clear prev data (scores) to start game over

//define song variables
var songIndex = 0;

//build artist & song data array using key value pairs
var nocturne = {
    "song name": "Nocturne in E flat major",
    "artist name": "Frédéric Chopin",
    "song path": "assets/songs/Nocturne.mp3"
}
var oboeConcerto = {
    "song name": "Oboe Concerto in C",
    "artist name": "Mozart",
    "song path": "assets/songs/Oboe Concerto.mp3"
}
var pianoSonata = {
    "song name": "Piano Sonata no. 14 in C# minor",
    "artist name": "Beethoven",
    "song path": "assets/songs/Piano Sonata.mp3"
}
var violinConcerto = {
    "song name": "Violin Concerto in F minor",
    "artist name": "Antonio Vivaldi",
    "song path": "assets/songs/Violin Concerto.mp3"
}
var songAnswer = {};
var songs = [nocturne, oboeConcerto, pianoSonata, violinConcerto];
var playerArtistGuess = "";
var playerSongGuess = "";
var audio = new Audio(songAnswer["song path"]);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//add text to HTML buttons

//link data for artist name buttons
function nextSong() {
    let songExtras = [...songs]
    let songAnswerIndex = Math.floor(Math.random()*songExtras.length)
    console.log(songs)
    console.log(songExtras)
    songAnswer = songExtras[songAnswerIndex];
    songExtras.splice(songAnswerIndex, 1)
    let incorrectAnswerIndex1 = Math.floor(Math.random()*songExtras.length)
    let incorrectAnswer1 = songExtras[incorrectAnswerIndex1];
    songExtras.splice(incorrectAnswerIndex1, 1)
    let incorrectAnswerIndex2 = Math.floor(Math.random()*songExtras.length)
    incorrectAnswer2 = songExtras[incorrectAnswerIndex2];
    songExtras.splice(incorrectAnswerIndex2, 1)
    let incorrectAnswerIndex3 = Math.floor(Math.random()*songExtras.length)
    incorrectAnswer3 = songExtras[incorrectAnswerIndex3];
    songExtras.splice(incorrectAnswerIndex3, 1)
    var songAnswerOptions = [songAnswer];
    var duplicateFound = null;
    for (let i=0; i<songs.length; i++) {
        for (let n=0; n<songAnswerOptions.length; n++) {
            if (songs[i] === songAnswerOptions[n]) {
                duplicateFound = true;
            }
        }
        //random int in splice not working, changed to 0 to test, trying to make select random artist to add to guess options
        if (!duplicateFound) {
            songAnswerOptions.splice(Math.floor(Math.random()*songAnswerOptions.length, 0, songs[i]))
        }
    }
    
    document.querySelector('#artist-choice-1').innerText = incorrectAnswer1["artist name"];
    document.querySelector('#artist-choice-2').innerText = incorrectAnswer2["artist name"];
    document.querySelector('#artist-choice-3').innerText = songAnswer["artist name"];
    document.querySelector('#artist-choice-4').innerText = incorrectAnswer3["artist name"];

    document.querySelector('#song-choice-1').innerText = incorrectAnswer1["song name"];
    document.querySelector('#song-choice-2').innerText = songAnswer["song name"];
    document.querySelector('#song-choice-3').innerText = incorrectAnswer2["song name"];
    document.querySelector('#song-choice-4').innerText = incorrectAnswer3["song name"];
}

async function playAudio() {
    audio.src = songAnswer["song path"]
    audio.duration = 5;
    console.log(audio.src)
    audio.play();
    await sleep(15000);
    audio.pause();
}

function pauseAudio() {
    audio.pause();
}

function changeArtistGuess(element) {
    playerArtistGuess = element.innerText
    console.log(element)
}

function changeSongGuess(element) {
    playerSongGuess = element.innerText
}

async function submitAnswer() {
    console.log(playerSongGuess)
    console.log(playerArtistGuess)
    console.log(songAnswer)
    var pointsReceived = 0;
    if (playerArtistGuess.includes(songAnswer["artist name"]) && playerSongGuess.includes(songAnswer["song name"])) {
        document.querySelector('#message-box').innerText = "Great Job, You Got Both Answers Correct!"
        pointsReceived = 2;
    } else if (playerArtistGuess.includes(songAnswer["artist name"])) {
        document.querySelector('#message-box').innerText = "Great Job, You Got The Artist Name Correct!"
        pointsReceived = 1;
    } else if (playerSongGuess.includes(songAnswer["song name"])) {
        document.querySelector('#message-box').innerText = "Great Job, You Got The Song Title Correct!"
        pointsReceived = 1;
    } else {
        document.querySelector('#message-box').innerText = "Sorry, That's Incorrect."
    }
    await sleep(5000)
    audio.pause()
    document.querySelector('#message-box').innerText = ""

    
    if (player1Turn) {
        player1.points += pointsReceived;
        document.querySelector('#player-turn').innerText = "IT'S YOUR TURN - PLAYER 2!"
        //if it is player 1's turn, make it not player 1's turn (make it player 2's turn)
        player1Turn = false;
    } else {
        player2.points += pointsReceived
        document.querySelector('#player-turn').innerText = "IT'S YOUR TURN - PLAYER 1!"  
        player1Turn = true;

    }
    document.querySelector('#player1-score').innerText = `PLAYER 1 SCORE: ${player1.points}`
    document.querySelector('#player2-score').innerText = `PLAYER 2 SCORE: ${player2.points}`

    nextSong();
}

nextSong()

