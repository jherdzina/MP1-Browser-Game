//define player variables
var player1Turn = true;

var player1 = {
    "points": 0,
};

var player2 = {
    "points": 0
};

//define song variables
var songIndex = 0;

//build artist & song data array using key value pairs
var nocturne = {
    "song name": "Nocturne in E flat major",
    "artist name": "Frédéric Chopin",
    "song path": "assets/songs/Nocturne in E flat major, Op. 9 no. 2.mp3"
}
var oboeConcerto = {
    "song name": "Oboe Concerto in C",
    "artist name": "Mozart",
    "song path": "assets/songs/Oboe Concerto in C, K.314_271k - II. Andantino.mp3"
}
var pianoSonata = {
    "song name": "Piano Sonata no. 14 in C# minor",
    "artist name": "Beethoven",
    "song path": "assets/songs/Piano Sonata no. 14 in C#m 'Moonlight', Op. 27 no. 2 - I. Adagio sostenuto.mp3"
}
var violinConcerto = {
    "song name": "Violin Concerto in F minor",
    "artist name": "Antonio Vivaldi",
    "song path": "assets/songs/Violin Concerto in F minor, RV 297 'Winter' - I. Allegro non molto.mp3"
}
var songAnswer = {};
var songs = [nocturne, oboeConcerto, pianoSonata, violinConcerto];

var playerArtistGuess = "";
var playerSongGuess = "";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//add text to HTML buttons

//link data for artist name buttons
function nextSong() {
    songAnswer = songs[Math.floor(Math.random()*songs.length)];
    var songAnswerOptions = [songAnswer];
    var duplicateFound = null;
    for (let i=0; i<songs.length; i++) {
        for (let n=0; n<songAnswerOptions.length; n++) {
            if (songs[i] === songAnswerOptions[n]) {
                duplicateFound = true;
            }
        }
        if (!duplicateFound) {
            songAnswerOptions.splice(0, 0, songs[i])
        }
    }
    console.log(songAnswerOptions)
}
nextSong()
//math.random to select the song to play on song player, then make that song assigned as the correct answer for the key value pair. 
//will need to populate guess buttons with key value pairs for answers for correct answer (both song & artist) and incorrect answers
//remaining buttons in random order


async function playAudio() {
    var audio = new Audio(songAnswer["song path"]);
    audio.duration = 5;
    audio.play();
    await sleep(15000);
    audio.pause();
    //document.getElementById('yourAudioTag').play();
}

function changeArtistGuess(element) {
    playerArtistGuess = element.innerText
    console.log(element.innerText)
    //if player wants to change their guess before hitting submit button, already linked in html
}

function changeSongGuess(element) {
    playerSongGuess = element.innerText
    console.log(element.innerText)
    //if player wants to change their guess before hitting submit button, already linked in html
}

async function submitAnswer() {
    var pointsReceived = 0;
    if (playerArtistGuess === songAnswer && playerSongGuess === songAnswer) {
        document.querySelector('#message-box').innerText = "Great Job, You Got Both Answers Correct!"
        pointsReceived = 2;
    } else if (playerArtistGuess === songAnswer) {
        document.querySelector('#message-box').innerText = "Great Job, You Got The Artist Name Correct!"
        pointsReceived = 1;
    } else if (playerSongGuess === songAnswer) {
        document.querySelector('#message-box').innerText = "Great Job, You Got The Song Title Correct!"
        pointsReceived = 1;
    } else {
        document.querySelector('#message-box').innerText = "Sorry, That's Incorrect."
    }

    await sleep(5000)
    document.querySelector('#message-box').innerText = ""

    
    if (player1Turn) {
        player1.points = pointsReceived;
        //if it is player 1's turn, make it not player 1's turn (make it player 2's turn)
        player1Turn = false;
    } else {
        player2.points = pointsReceived
        player1Turn = true;

    }

    console.log('Player guess is ' + playerArtistGuess + ' ' + playerSongGuess)

    //TODO: after you click submit, submits answer, checks for true/false and then switches to next player/refreshes data for new turn + tallies score variables
    
    //submit button is already linked in html
}



