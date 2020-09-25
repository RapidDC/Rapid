const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    if(!bot.dispatcher[`${guild}`]) return message.channel.send("Não há nenhuma música tocando no momento!");
    if(!args[0]) return message.channel.send("Insira um volume entre: 0-2. Ex: r!volume 1");

    try {
        const x = Number(args[0]);
        console.log(x);
        console.log(typeof(x));
        if (isNaN(x)) return message.channel.send("Valor inserido é inválido!");

        if (x > 2){
            return message.channel.send("Volume máximo 2!");
        } else if (x < 0){
            return message.channel.send("Volume mínimo 0!");
        } else {
            bot.dispatcher[`${guild}`].setVolume(x);
            return message.channel.send(`Volume alterado para ${args[0]}!`);
        }
    } catch (err) {
        return message.channel.send("Valor inserido é inválido!");
    }
};