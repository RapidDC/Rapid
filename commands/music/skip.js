const Discord = require('discord.js');
const play = require('./play');

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    message.member.voice.channel;
    const next = bot.queue[`${guild}`].shift();

    bot.dispatcher[`${guild}`] = false;
    bot.playing[`${guild}`] = false;

    play.run(bot,message,Array(next.link));
};