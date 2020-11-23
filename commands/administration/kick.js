const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	if (!args[0]) {
		message.channel.send("Especifique qual usuário deve ser banido! Ex: r!ban @Test#3333 (Motivo)");
		return;
	} else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("KICK_MEMBERS")) {
		message.channel.send("Você não tem permissão para executar esse comando! ``` r!setadmin (Nick) ``` para dar permissão a um usuário!");
		return;
	}
	
	const user = message.mentions.members.first();
	if (!user) return message.channel.send("Usuário inválido!");
    const username = user.displayName;

    args.shift();
    args = args.join([separator = ' ']);
    if (user) user.kick(args); else return;
    message.channel.send(`${username} kickado por: <@${message.author.id}>\nMotivo: ${args}`);
}