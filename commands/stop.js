const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    if(!bot.dispatcher) return console.error('erro');

    bot.queue = [];
    bot.playing = false;
    bot.dispatcher.pause();
    bot.dispatcher = false;
};