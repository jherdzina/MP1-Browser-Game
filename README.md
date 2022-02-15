# MP1-Browser-Game

//link js, html & css files

//Scope
//Game: Song Quiz Mock-up

//Priority/where to start:
//1.build HTML layout

//MPV: 
//2 player, players will alternate taking turns guessing title & artist from song clip that is played
//Will need box with submit button for player to type answer - 2 boxes, 1 for title, 1 for artist
//Get point for each correct answer and get bonus point is both answers (title & artist) are correct

//******instructors strongly suggested starting with multiple choice and then move to type box w/ regex for stretch goal

//Use Regex to parse through player answers so that it is not case sensitive, apostrophes, commas etc - only pay attention to word characters
//store song data example: 
var tswiftSong = {
    "song name": "exile",
    "artist name": "Taylor Swift",
    "song path": "./songs/T-Swift.mp4"
}

//time limit for player to answer, example: 30 secs
//ability to replay clip up to 2 add'l times
//song clip length approx 5 sec
//make modified song clips for guessing
//ability to pass/skip turn if player does not know the answer/does not want to guess
//in case of tie, keep track of time to answer for each clip, fastest player overall (of combined times) would be the winner - total time spent guessing property for player 1 & player 2 objects, values will increment after each turn has started & will stop once player submits guess


//scoring: player 1 - object that has a score property, player 2 - object that has a score property

//pass & play, playing on same screen/computer, alternating between players

//bonus round for extra points at end

//stretch goals:
//let player choose music decade: 90s, 2000s, 2010, 2020, etc
//adding playabilty for more 3 or more players
//add different modes: easy/hard: longer vs shorter clips
//bonus points for correct answer streak
//regex - type box