const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    const guild = message.guild.id;

    bot.dispatcher[`${guild}`].resume();

    const resume_message = new Discord.MessageEmbed()
        .setTitle("Rapid Bot")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
        .setDescription(`Música resumida!`)
        .setFooter(`Resumido por ${message.author.username}`,message.author.avatarURL());

    message.channel.send(resume_message);
};