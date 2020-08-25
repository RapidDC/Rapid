const Discord = require('discord.js');
const backup = require('discord-backup');
const manage_roles = require('../../modules/manage_roles');

exports.run = (bot,message,args) => {
    if(!manage_roles.hasRole(message.member,"Rapid Admin") && !message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(":x: Você precisa ter permissão de administrador para criar um backup!");
    }

    backup.create(message.guild, {
        jsonBeautify: true
    }).then(async (backupData) => {
        console.log(backupData);
        
        const msg_embed = new Discord.MessageEmbed()
            .setColor("#ff0015")
            .setTitle("Rapid Bot")
            .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
            .setDescription(`\\✅ Backup criado com sucesso!\nPara carrega-lo, execute o comando: r!load ${backupData.id}`)
            .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
            .setFooter(message.author.username,message.author.avatarURL() || message.author.defaultAvatarURL)
            .setTimestamp();

        message.channel.send(msg_embed)
    }).catch(async (err) => {
        const err_embed = new Discord.MessageEmbed()
            .setColor("#ff0015")
            .setTitle("Rapid Bot")
            .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
            .setDescription(`\\❌ Erro ao criar o backup!\nTente novamente mais tarde.\n${err}`)
            .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
            .setFooter(message.author.username,message.author.avatarURL() || message.author.defaultAvatarURL)
            .setTimestamp();

        message.channel.send(err_embed);
    });
};