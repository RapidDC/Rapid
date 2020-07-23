const Discord = require('discord.js');
const fs = require('fs');

exports.run = (bot,message,args) => {
    const arguments = (args.join(separator = ' '));
    
    if (!arguments) {
        message.channel.send("Está faltando argumentos! Veja o r!help administration para obter ajuda");
        return;
    } else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Você não tem permissão para executar esse comando! ``` r!setadmin (Nick) ``` para dar permissão a um usuário!");
        return;
    }

    const channel = message.guild.channels.cache.find(channel => channel.name === arguments.trim());
    let database = JSON.parse(fs.readFileSync('./database/alerts.json','utf8'));
    const guild = message.guild;

    if (!channel){
        return message.channel.send("Canal não encontrado!");
    }

    database[`${guild.id}`] = {};
    database[`${guild.id}`]['channel_id'] = channel.id;

    channel.createWebhook('Rapid Alerts', {
        avatar: 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png',
    }).then(webhook => {
        message.channel.send("Canal de alertas definido e webhook criado!");
        fs.writeFileSync('./database/alerts.json', JSON.stringify(database));
    });
};