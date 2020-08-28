const Discord = require('discord.js');
const config = require('../../config.json');

exports.run = (bot,message,args) => {
    if (message.author.id !== 329314898758729729) return;

    const title,description,thumbnail = String(message.content).split(";");
    const wbhook = new Discord.WebhookClient(config.webhook.id,config.webhook.token);

    const msg = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle(title)
        .setURL('http://rapid-site.surge.sh')
        .setDescription(description)
        .setThumbnail(thumbnail)
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
        .setTimestamp();

    return wbhook.send(msg);
};