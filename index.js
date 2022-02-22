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
var songAnswer = {};

//build artist & song data array using key value pairs

var totalEclipseOfTheHeartSong = {
    "song name": "Total Eclipse of the Heart",
    "artist name": "Bonnie Tyler",
    "song path": ".assets/songs/Total-Eclipse.mp4"
}
var wannabeSong = {
    "song name": "Wannabe",
    "artist name": "Spice Girls",
    "song path": ".assets/songs/Wannabe.mp4"
}

var believeSong = {
    "song name": "Believe",
    "artist name": "Cher",
    "song path": ".assets/songs/Believe.mp4"
}

var songs = [totalEclipseOfTheHeartSong, wannabeSong, believeSong];

var playerArtistGuess = "";
var playerSongGuess = "";

//add text to HTML buttons

//link data for artist name buttons

//var audio = new Audio('audio_file.mp3'); (referenced from stackoverflow)
//audio.play();
//document.getElementById('yourAudioTag').play();

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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



