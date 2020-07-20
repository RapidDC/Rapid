const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    if(!bot.dispatcher) return message.channel.send("Não há nenhuma música tocando no momento!");
    if(!args[0]) return message.channel.send("Especifique qual o volume entre: 0-2. Ex: r!volume 1");

    bot.dispatcher.setVolume(args[0]);
    message.channel.send(`Volume alterado para ${args[0]}!`);
};