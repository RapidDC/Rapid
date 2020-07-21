const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const invite_message = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle('Rapid Bot')
        .setURL('https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
        .addFields(
            // { name: 'Me adicione ao seu servidor!',value: '[Clique aqui! 🔗](https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot)' },
            { name: 'Meu prefixo é r!',value: 'Para ver os comandos digite r!help' }
        )
        .setDescription(
            "Para me adicionar ao seu servidor você precisa de:\n"+
            "`1.` Ter o seu **Email Verificado**\n"+
            "`2.` Ter permissão de **Administrador**\n"+
            "`3.` Com tudo isso, [Clique aqui! 🔗](https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot)"
        )
        .setTimestamp();

    message.channel.send(invite_message);
};