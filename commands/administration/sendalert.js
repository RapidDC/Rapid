const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (bot,message,args) => {
    const arguments = (args.join(separator = ' ')).split(';');
    
    if (arguments < 2) {
        message.channel.send("Está faltando argumentos! Veja o r!help administration para obter ajuda");
        return;
    } else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Você não tem permissão para executar esse comando! ``` r!setadmin (Nick) ``` para dar permissão a um usuário!");
        return;
    }
    
    let database = JSON.parse(fs.readFileSync('./database/alerts.json'));
    const guild = message.guild;    

    if (!database[`${guild.id}`]['channel_id']){
        return message.channel.send("Não há um canal definido! Defina pelo comando r!setalert.");
    }

    const channel = bot.channels.cache.get(database[`${guild.id}`]['channel_id']);

    let webhooks = await channel.fetchWebhooks();
    webhooks = webhooks.map(hook => { return hook });
    
    const webhook = webhooks[0];

    const response = new Discord.MessageEmbed()
        .setTitle(`${arguments[0]}`)
        .setAuthor(`${webhook.name}`, `${webhook.avatarURL()}`, 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setDescription(`${arguments[1]}`)
        .setThumbnail(`${arguments[2] ? arguments[2] : ''}`)
        .setTimestamp();

    await webhook.send(response);
};