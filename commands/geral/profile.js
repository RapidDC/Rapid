const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const user = message.mentions.users.first();
    if (!user) {
        const err_msg = new Discord.MessageEmbed()
            .setTitle("Rapid Bot")
            .setColor("#ff0015")
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setDescription("\\❌Você não mencionou nenhum usuário!")
            .setTimestamp();

        return message.channel.send(err_msg);
    }

    const msg = new Discord.MessageEmbed()
        .setTitle("Rapid Bot")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setDescription(`\\✅ Aqui está a foto de perfil de <@${user.id}>`)
        .setImage(user.displayAvatarURL())
        .setTimestamp();

    return message.channel.send(msg);    
}; 