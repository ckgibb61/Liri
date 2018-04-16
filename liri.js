require("dotenv").config();
const fs = require('fs');

const keys = require("./keys.js");
const twitter = require("twitter");
const spotify = require("node-spotify-api");



var spotify = new Spotify (keys.spotify);
var client = new Twitter (keys.twitter);

switch (process.argv[2]) {
    case "my-tweets":
        return twits();
        break;
    case "spotify":
        if (process.argv[3])
           return spotify();
        };



function twits() {
        const params = {
            screen_name: 'SippinWhat'
        };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                tweets.forEach(console.log(tweet.text))
            }
        });
}
function spotIt() {
    Spotify.search({
        type: 'track',
        query: songName
    }, if (err)
        return console.log(error);
    else (console.log(data.tracks.items))
};
function movie() {
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error) {
            console.log(JSON.parse(body));
        }
    });
}