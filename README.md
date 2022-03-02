# MP1-Browser-Game

MVP GOALS: 

* 2 player game
* Pass & Play game where player's alternate guessing song/artist after listening to music clip
* Multiple choice boxes: 4 for song, 4 for artist
* Points awarded for correct artist/song (1 point each)


INITIAL STRETCH GOALS: 

* Add more songs/link API for more expansive song library
* Time limit for player to answer, example: 30 secs
* Song clip length approx 5 sec
* Ability to pass/skip turn if player does not know the answer/does not want to guess

ADDITIONAL STRETCH GOALS:

* Add music/mp3/mp4 API for song clip data
* Let players choose music decade: 90s, 2000s, 2010, 2020, etc or music genre
* Add playability for 3 or more players
* Add different modes: easy/hard: longer vs shorter clips
* Bonus points for correct answer streak
* Bonus round for additional points/tie-break
* Tie-breaker: keep track of time to answer for each clip, fastest player overall (of combined times) would be the winner - total time spent guessing property for player 1 & player 2 objects, values will increment after each turn has started & will stop once player submits guess
* Use Regex to parse through player answers so that it is not case sensitive, apostrophes, commas etc - only pay attention to word characters