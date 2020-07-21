const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    if(!bot.dispatcher[`${guild}`]) return message.channel.send("Não há nenhuma música tocando no momento!");

    bot.dispatcher[`${guild}`].pause();

    const pause_message = new Discord.MessageEmbed()
        .setTitle("Rapid Bot")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setDescription(`Música pausada!`)
        .setFooter(`Pausado por ${message.author.username}`,message.author.avatarURL());

    message.channel.send(pause_message);
};