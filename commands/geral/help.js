const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	const principal = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Lista dos comandos")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Comandos para Administração do servidor", value: "r!help administration" },
			{ name: "Comandos para ouvir músicas", value: "r!help music" },
			{ name: "Comandos Gerais", value: "r!help geral"},
			{ name: "Comandos para criação de memes", value: "r!help memes" },
			{ name: "Comandos Backup", value: "r!help backup" },
		)
		.setTimestamp();

	const administration = new Discord.MessageEmbed()
	    .setColor("#ff0015")
	    .setTitle("Rapid Bot")
	    .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
	    .setDescription("Comandos para Administração do servidor (Para utiliza-los você precisa da permissão de Administrador ou o cargo 'Rapid Admin')")
	    .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
	    .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
	    .addFields(
			{ name: "Bane usuários", value: "r!ban (Usuários)\n\nEx: r!ban @Test#0000 @A#5313" },
			{ name: "Kicka usuários", value: "r!kick (Usuários)\n\nEx: r!ban @Test#0000 @A#5313" },
			{ name: "Da o cargo 'Rapid Admin' a usuários", value: "r!setadmin (Usuários)\n\nEx: r!setadmin @Test#0000 @A#5313" },
			{ name: "Limpa o chat" ,value: "r!clear (Quantidade de mensagens a ser deletadas)\n\nEx: r!clear 10" },
			{ name: "Muta um usuário", value: "r!mute (Usuário) (Tempo - Padrão 15 minutos)\n\nEx: r!mute @Test#0000 1h(1 hora)" },
			{ name: "Desmuta um usuário", value: "r!unmute (Usuário)\n\nEx: r!unmute @Test#0000" },
			{ name: "Define o canal no qual será exibido alertas", value: "r!setalert (Nome do Canal)" },
			{ name: "Envia uma mensagem em formato embed (TODOS OS ARGUMENTOS DEVEM SER SEPARADOS POR ;)", value: "r!sendembed (Título) ; (Texto) ; (Thumbnail: opcional)" },
			{ name: "Cria backup do servidor (Cargos, canais, mensagems, etc)", value: "r!backup" },
			{ name: "Carrega um backup", value: "r!load (BACKUP ID)" },
			{ name: "Ativa ou desativa o sistema anti-flood", value: "r!antiflood" },
			{ name: "Desativa o chat", value: "r!stopchat <Canal (Opcional)>" },
			{ name: "Ativa novamente o chat", value: "r!resumechat <Canal (Opcional)>" },
        )
	    .setTimestamp();
	
	const music = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Comandos para ouvir músicas")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Adiciona uma música a fila de reprodução", value: "r!play (Nome ou Link do Youtube)\n\nEx: r!play União Flasco" },
			{ name: "Pausa uma música", value: "r!pause" },
			{ name: "Despausa uma música", value: "r!resume" },
			{ name: "Para a música que está tocando e limpa a fila" ,value: "r!stop" },
			{ name: "Define o volume da música", value: "r!volume 0.5" },
			{ name: "Pula para a próxima música da fila", value: "r!skip" },
			{ name: "Coloca a música em loop", value: "r!loop" },
		)
		.setTimestamp();

	const geral = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Comandos para ouvir músicas")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Exibe os comandos", value: "r!help" },
			{ name: "Exibe informações sobre o bot", value: "r!botinfo" },
			{ name: "Exibe informações sobre o servidor", value: "r!serverinfo" },
			{ name: "Baixar a foto de perfil de um usuário", value: "r!profile (Usuário)" },
			{ name: "Exibe a mensagem de convite do bot", value: "r!invite" },
			{ name: "Exibe uma mensagem de regras" ,value: "r!rules" },
			{ name: "Exibe uma mensagem de convite para o servidor", value: "r!serverinvite (Descrição)\n\nEx: r!serverinvite Convide seus amigos para se divertirem conosco!" },
		)
		.setTimestamp();

	const memes = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription(
			"Comandos para criação de memes\n\n"+
			"**r!bobesponja (Texto)**\n"+
			"**r!bolsonaro (Imagem)**\n"+
			"**r!bolsonaro2 (Imagem)**\n"+
			"**r!changemymind (Texto)**\n"+
			"**r!monstro (Texto)**\n"+
			"**r!piseinamerda (Texto)**\n"
		)
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.setTimestamp();

	const backp = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription(
			"Comandos para criação de memes\n\n"+
			"**r!backup**\n"+
			"**r!load (Backup ID)**\n"
		)
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.setTimestamp();

	if (!args[0]){
		message.channel.send(principal);
	} else if (args[0].toLowerCase() === "administration"){
		message.channel.send(administration);
	} else if (args[0].toLowerCase() === "music"){
		message.channel.send(music);
	} else if (args[0].toLowerCase() === "geral"){
		message.channel.send(geral);
	} else if (args[0].toLowerCase() === "memes"){
		message.channel.send(memes);
	} else if (args[0].toLowerCase() === "backup") {
		message.channel.send(backp);
	} else {
		message.channel.send(principal);
	}
}