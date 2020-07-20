const Discord = require("discord.js");

exports.run = (bot,message,args) => {
	if (!args[0]) {
		message.channel.send("Especifique qual usuário deve receber o cargo! Ex: r!setadmin @Test#3333");
		return;
	} else if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("ADMINISTRATOR")) {
		message.channel.send("Você não tem permissão para executar esse comando!");
		return;
	}

	message.mentions.members.map((member) => {
		message.guild.roles.fetch()
			.then(roles => {
				roles.cache.map(role => {
					if(role.name === "Rapid Admin"){
						member.roles.add(role);
					}
				})
			})
			.catch(console.error);
	});

	message.channel.send(`${message.mentions.members.size} ${message.mentions.members.size < 2 ? 'membro recebeu' : 'membros receberam'} o cargo "Rapid Admin"!`);
}