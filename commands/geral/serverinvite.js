const Discord = require('discord.js');
const handling_objects = require('../../modules/handling_objects');

exports.run = async (bot,message,args) => {
    const guild = message.guild;

    const description = args.join(separator = ' ');
    const { name } = guild;
    const icon = guild.iconURL();

    const invite_options = {
        "temporary": false,
        "maxAge": 0,
    };
    const list = handling_objects.get_first(guild.channels.cache);
    let invite;

    try {
        invite = list[1].createInvite(invite_options);
    } catch (TypeError) {
        invite = list[1][1].createInvite(invite_options);
    }

    const msg = new Discord.MessageEmbed()
        .setTitle(name)
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setThumbnail(icon)
        .setDescription(description + `\n\n${await invite}` || '')
        .setTimestamp();

    message.channel.send(msg);
};