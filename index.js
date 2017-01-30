'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Programming Jokes';

/**
 * Array containing programming jokes.
 */
var JOKES = [
    "Two bytes meet. The first byte asks, are you ill? The second byte replies, no, just feeling a bit off.",
    "Eight bytes walk into a bar. The bartender asks, Can I get you anything? Yeah, reply the bytes. Make us double.",
    "How did the programmer die in the shower? He read the shampoo bottle instructions: Lather, Rinse, Repeat.",
    "How many programmers does it take to change a light bulb? None. It's a hardware problem!",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
    "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    "A programmer walks into the butcher shop and buys a kilo of meat. An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
    "Have you heard about the new Amazon super computer? It's so fast, it executes an infinite loop in 6 seconds!",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "What is a programmer's favorite hangout place? Foo bar.",
    "What do computers and air conditioners have in common? They both become useless when you open windows!",
    "The word algorithm was coined to recognize Al Gore's contribution to computer science.",
    "A foo walks into a bar, takes a look around, and says Hello World!",
    "Three database SQL waked into a NoSQL bar. A little while later, they walked out because they couldn't find a table!"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetJoke');
    },
    'GetNewJokeIntent': function () {
        this.emit('GetJoke');
    },
    'GetJoke': function () {
        var jokeIndex = Math.floor(Math.random() * JOKES.length);
        var randomJoke = JOKES[jokeIndex];

        // Create speech output
        var speechOutput = "Here's your joke: " + randomJoke;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomJoke)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a programming joke, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};