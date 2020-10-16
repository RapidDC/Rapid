const Discord = require('discord.js');
const fs = require('fs');
// const database_path = './database/welcome_message.json'
const WelcomeMessage = require('../../models/WelcomeMessage');

// let database = JSON.parse(fs.readFileSync(database_path, 'utf8'));

exports.run = (bot,message,args) => {
    if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("KICK_MEMBERS")) {
		message.channel.send("Você não tem permissão para executar esse comando! ``` r!setadmin (Nick) ``` para dar permissão a um usuário!");
		return;
    }
    
    const guild = message.guild;
    let arguments = args.join(separator = ' ');

    arguments = arguments.split(';');

    if(arguments.length < 4){
        const response = new Discord.MessageEmbed()
            .setTitle('❌ERRO!❌')
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setDescription(
                "Está **faltando argumentos!** Se estiver com alguma **dúvida** digite **r!help administration** para ver a ajuda do comando."
            )
            .setTimestamp();

        return message.channel.send(response);
    }
    
    // database[`${guild.id}`] = {};
    // database[`${guild.id}`]['title'] = arguments[0];
    // database[`${guild.id}`]['text'] = arguments[1];
    // database[`${guild.id}`]['gif_link'] = arguments[2];
    // database[`${guild.id}`]['channel_name'] = arguments[3];
    // fs.writeFileSync(database_path,JSON.stringify(database));

    WelcomeMessage.create({
        guild: guild.id,
        title: arguments[0],
        text: arguments[1],
        gif_link: arguments[2],
        channel_name: arguments[3], 
    });

    const channel = message.guild.channels.cache.find(channel => channel.name === arguments[3].trim());

    if(channel){
        const welcome_message = new Discord.MessageEmbed()
            .setTitle(`${arguments[0]}`)
            .setAuthor(`${message.member.displayName}`,message.member.user.avatarURL())
            .setThumbnail(message.member.user.avatarURL())
            .setImage(arguments[2])
            .setDescription(arguments[1])
            .setTimestamp();

        const response = new Discord.MessageEmbed()
            .setTitle('Rapid Bot')
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setDescription(
                "A mensagem de boas-vindas foi definida com sucesso!\n"+
                `Ela será exibida sempre que um membro entrar no canal <#${channel.id}>`
            )
            .setTimestamp();

        message.channel.send(response);
        message.channel.send(welcome_message);
    } else {
        const response = new Discord.MessageEmbed()
            .setTitle('❌ERRO!❌')
            .setAuthor(`${message.author.username}`, `${message.author.avatarURL()}`, 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setDescription(
                "Houve um **erro** ao tentar encontrar o **canal**, veja se o nome está **correto**."
            )
            .setTimestamp();

        message.channel.send(response);
    }
}