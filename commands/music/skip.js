const Discord = require('discord.js');
const play = require('./play');

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    message.member.voice.channel;

    const next = bot.queue[`${guild}`] ? bot.queue[`${guild}`].shift() : null;
    if (!next) return message.channel.send("\\❌ Nenhuma música na fila!");

    bot.dispatcher[`${guild}`] = false;
    bot.playing[`${guild}`] = false;

    play.run(bot,message,next);
};