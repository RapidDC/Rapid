const Discord = require('discord.js');
const play = require('./play');

exports.run = (bot,message,args) => {
    message.member.voice.channel;
    const next = bot.queue.shift();

    bot.dispatcher = false;
    bot.playing = false;

    play.run(bot,message,Array(next.link));
};