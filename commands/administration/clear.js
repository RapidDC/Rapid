const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	if (!args[0]) {
		message.channel.send("Especifique quantas mensagens devem ser apagadas! Ex: r!clear 5");
		return;
	} else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("Você não tem permissão para executar esse comando! ``` r!setadmin (Nick) ``` para dar permissão a um usuário!");
		return;
	}

	if (args[0] > 100 || args[0] < 2) return message.channel.send("Envie um valor entre 2 e 100!");

	try{
		message.channel.bulkDelete(args[0]).then(messages => {
			message.channel.send(`${messages.size} mensagens deletadas!`);
			setTimeout(() => { bot.user.lastMessage.delete() }, 4000);
		});
	} catch (err) {
		message.channel.send(err);
	}
}