const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const regras = new Discord.MessageEmbed()
        .setTitle("🚫 __REGRAS__ 🚫")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setDescription(
            "`1.` **Qualquer tipo de preconceito** = Ban\n"+
            "`2.` **Ofensas** = Mute\n"+
            "`3.` **Divulgação de links** = 2 Avisos,se continuar Ban\n"+
            "`4.` **Flood/Spam** = Mute/Kick\n"+
            "`5.` **Divulgação no privado** = Ban\n"+
            "`6.` **Incomodar os outros nas calls** = Kick"
        )
        .setTimestamp();

    message.channel.send(regras);
};