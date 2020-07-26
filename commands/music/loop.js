const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    let response;

    if (!bot.loop[`${guild}`]){
        bot.loop[`${guild}`] = true;
        
        response = new Discord.MessageEmbed()
            .setTitle("Rapid Bot")
            .setColor("#ff0015")
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
            .setDescription(`Música colocada em looping!`)
            .setFooter(`Música colocada em looping por ${message.author.username}`,message.author.avatarURL());
    } else {
        bot.loop[`${guild}`] = false;
        response = new Discord.MessageEmbed()
            .setTitle("Rapid Bot")
            .setColor("#ff0015")
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
            .setDescription(`Looping desativado!`)
            .setFooter(`Looping desativado por ${message.author.username}`,message.author.avatarURL());

    }

    message.channel.send(response);
};