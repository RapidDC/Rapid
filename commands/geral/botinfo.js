const Discord = require('discord.js');
const ServerConfig = require('../../models/ServerConfig');
const ms = require('ms');

exports.run = async (bot,message,args) => {
    const server = await ServerConfig.findOne({ guild: message.guild.id });
    
    const guilds = bot.guilds.cache.size;
    const channels = bot.channels.cache.size;
    
    const joinedAt = server.joinedAt;
    let time = (new Date().getTime() - joinedAt);


    const seconds = Math.round(ms(time));
    const minutes = Math.round(time / 60000);
    const hours = Math.round(time / 120000);
    const days = Math.round(time / 60 / 60);

    const msg = new Discord.MessageEmbed()
        .setTitle("Rapid Bot")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
        .setDescription(
            "Informações sobre o **bot**\n"+
            "\n"+
            `Está em **${guilds} grupos** e **${channels} canais**\n`+
            `Está nesse servidor desde ${days+' dias '+hours+' horas '+minutes+' minutos '+seconds+' segundos'}`
        )
        .setTimestamp();

    message.channel.send(msg);
};