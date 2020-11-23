const Discord = require('discord.js');
const manage_roles = require('../../modules/manage_roles');

exports.run = (bot,message,args) => {
    const role_name = "Rapid Muted";

    if (!args[0]) {
        message.channel.send("Especifique qual usuário deve ser desmutado! Ex: r!unmute @Test#3333");
        return;
	} else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("MUTE_MEMBERS")) {
        message.channel.send("Você não tem permissão para executar esse comando!");
        return;
    }

    const user = message.guild.member(message.mentions.users.first());
    if (!user) return message.channel.send("Usuário inválido!");

    message.mentions.members.map((member) => { 
        manage_roles.removeRole(member,role_name);
        user.send(`Você foi desmutado no servidor ${message.guild.name}!`);
    });

    message.channel.send(`${message.mentions.members.size} ${message.mentions.members.size < 2 ? 'membro foi desmutado' : 'membros foram desmutados'}!`);
};