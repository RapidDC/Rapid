const Discord = require("discord.js");

exports.run = (bot) => {
    if(bot.dispatcher) {
        bot.queue = [];
        bot.playing = false;
        bot.dispatcher = false;
    }

    console.log('disconnect');
};