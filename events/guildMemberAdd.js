const Discord = require("discord.js");
const fs = require("fs");
let database = JSON.parse(fs.readFileSync('./database/welcome_message.json', 'utf8'));

exports.run = (bot,member) => {
    const guild = member.guild;

    const welcome_options = database[`${guild.id}`];
    const channel = member.guild.channels.cache.find(channel => { return channel.name === "member-log" ? channel : undefined });    

    if(channel && welcome_options){
        const welcome_message = new Discord.MessageEmbed()
            .setTitle(`${welcome_options['title']}`)
            .setAuthor(`${member.displayName}`,member.user.avatarURL())
            .setThumbnail(member.user.avatarURL())
            .setImage(welcome_options['gif_link'])
            .setDescription(welcome_options['text'])
            .setTimestamp();

        channel.send(welcome_message);
    }
}