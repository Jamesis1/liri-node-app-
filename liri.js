require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var app = process.argv[2];
var val1 = process.argv[3]; 


if (app === "concert-this") {
    concertThis() 
}
else if (app === "spotify-this-song") {
    spotifySong();

}
else if (app === "movie-this") {
    moviethis();
}


function concertThis () {
    console.log("concert");
}
function spotifySong () {
    console.log("spotifysong");
    console.log(val1); 

    spotify.search({ type: 'track', query:val1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].album.artists[0].name);
        console.log("song's name" + data);
        console.log(data.tracks.items[0].album.name);
        console.log("A preview link of the song from Spotify" + data.tracks.items[0].album.artists[0].href);
        console.log("The album that the song is from");
        console.log(data,tracks.items[0],album.artists[0])


        

    })
}



