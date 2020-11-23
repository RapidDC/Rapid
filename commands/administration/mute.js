const Discord = require('discord.js');
const manage_roles = require('../../modules/manage_roles');
const ms = require('ms');

exports.run = (bot,message,args) => {
    const role_name = "Rapid Muted";

    if (!args[0]) {
        message.channel.send("Especifique qual usuário deve ser mutado! Ex: r!mute @Test#3333 50m(50 minutos)");
        return;
	} else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("MUTE_MEMBERS")) {
        message.channel.send("Você não tem permissão para executar esse comando!");
        return;
    }
    
    const user = message.guild.member(message.mentions.users.first());
    if (!user) return message.channel.send("Usuário inválido!");
    const mute_time = args[1] ? ms(args[1]) : ms('15m');
    
    message.mentions.members.map((member) => { 
        manage_roles.addRole(member,role_name);
        user.send(`Você foi mutado no servidor ${message.guild.name} por ${args[1] ? args[1] : '15m'}!`);
    });

    message.channel.send(`${message.mentions.members.size} ${message.mentions.members.size < 2 ? 'membro foi mutado' : 'membros foram mutados'} por ${args[1] || '15m'}!`);


    setTimeout(() => {
        message.mentions.members.map((member) => manage_roles.removeRole(member,role_name));
        message.channel.send(`Usuario desmutado!`);
    },mute_time);
}; 