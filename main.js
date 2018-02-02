
require('dotenv').config();
var Twit = require("twit");
var generateVerse = require('./generateVerse.js');



function sendTweet() {

  var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
  });
  var verse = generateVerse();

  var verseString = verse.verse + " \n " + verse.verseEn + " \n Name: " + verse.surahName + " \n Verse: " + verse.randomVerseNumber + " \n Index: " + verse.surahIndex + "\n Type: " + verse.surahType;


  T.post('statuses/update', { status: verseString }, function (err, data, response) {

  });
}

setInterval(sendTweet, 10000);





