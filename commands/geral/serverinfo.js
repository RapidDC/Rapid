const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    const guild = message.guild;
    
    let createdAt = String(guild.createdAt);
    const description = guild.description;
    const banner = guild.banner;
    const id = guild.id;
    const membersCount = guild.memberCount;
    const ownerID = guild.ownerID;
    const name = guild.name;
    const region = guild.region;
    const verified = guild.verified;

    createdAt = createdAt.split('.')[0]

    const response = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle("Rapid Bot")
        .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
        .setDescription("Informações sobre o servidor")
        .setThumbnail(guild.bannerURL())
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .addFields(
            { name: 'Nome:', value: name },
            { name: "\\😎 Dono:", value: `<@${ownerID}>` },
            { name: "\\👨‍👦‍👦 Quantia de membros:", value: membersCount },
            { name: "\\❓ Descrição:", value: `${description ? description : 'Nenhuma'}` },
            { name: '\\🌎 Região:', value: region },
            { name: "\\🕵️ ID do Servidor (Para desenvolvedores):", value: id },
            { name: "\\⏰ Criado em:", value: createdAt },
        )
        .setTimestamp();

    message.channel.send(response);
}