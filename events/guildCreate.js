const Discord = require("discord.js");
const fs = require("fs");

exports.run = (bot,guild) => {
    // console.log('entrou em servidor')
    //;let channel_id;

    guild.roles.create({ data: { name: 'Rapid Admin' }});

    const welcome_message = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle('Rapid Bot')
        .setURL('https://google.com')
        .setDescription('Obrigado por me adicionar ao seu servidor!')
        .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
        .addFields(
            { name: 'Me adicione ao seu servidor!',value: '[Clique aqui! 🔗](https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot)' },
            { name: 'Meu prefixo é r!',value: 'Para ver os comandos digite r!help' }
        )
        .setTimestamp();
    
    if (guild.systemChannel){
        guild.systemChannel.send(welcome_message);
    } else {
        let channels = 0;
        guild.channels.cache.map((value,key,collection) => {
            if(guild.channels.resolve(value.id).type == "text" && channels < 1){
                guild.channels.resolve(value.id).send(welcome_message);
                channels = channels + 1;
            }
        });
    }
};