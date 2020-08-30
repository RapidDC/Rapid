const Discord = require("discord.js");
const fs = require("fs");
const WelcomeMessage = require('../models/WelcomeMessage');

exports.run = async (bot,member) => {
    const guild = member.guild;
    
    // let database = JSON.parse(fs.readFileSync('./database/welcome_message.json', 'utf8'));
    // const welcome_options = database[`${guild.id}`];
    
    const welcome_options = await WelcomeMessage.findOne({guild: guild.id});

    if(welcome_options){
        const channel = guild.channels.cache.find(channel => channel.name === `${welcome_options['channel_name']}`);

        if(channel){
            const welcome_message = new Discord.MessageEmbed()
                .setTitle(`${welcome_options['title']}`)
                .setAuthor(`${member.displayName}`,member.user.displayAvatarURL())
                .setThumbnail(member.user.displayAvatarURL())
                .setImage(welcome_options['gif_link'])
                .setDescription(welcome_options['text'])
                .setTimestamp();

            channel.send(welcome_message);
        }
    }
}