const Discord = require('discord.js');
const config = require('../../config.json');

exports.run = (bot,message,args) => {
    const [title,description,thumbnail] = args.join(separator = ' ').split(";");
    if (!title || !description) return;

    const msg = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle(title)
        .setURL('http://rapid-site.surge.sh')
        .setDescription(description)
        .setThumbnail(thumbnail ? thumbnail : null)
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
        .setTimestamp();

    return message.channel.send(msg);
};