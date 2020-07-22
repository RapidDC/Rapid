const Discord = require("discord.js");
const fs = require("fs");
let database = JSON.parse(fs.readFileSync('./database/welcome_message.json', 'utf8'));

exports.run = (bot,member) => {
    const guild = member.guild;

    const welcome_options = database[`${guild.id}`];
    
    if(welcome_options){
        const channel = guild.channels.cache.find(channel => channel.name === `${welcome_options['channel_name'].trim()}`);
        console.log(channel);

        if(channel){
            const welcome_message = new Discord.MessageEmbed()
                .setTitle(`${welcome_options['title']}`)
                .setAuthor(`${member.displayName}`,member.user.avatarURL())
                .setThumbnail(member.user.avatarURL())
                .setImage(welcome_options['gif_link'])
                .setDescription(welcome_options['text'])
                .setTimestamp();

            channel.send(welcome_message);
        } else {
            console.log('erro porra');
        }
    }
}