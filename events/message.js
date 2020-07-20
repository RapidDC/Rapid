const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = (bot, message) => {
	// let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
	if(message.channel.type === 'dm' || !message.content.startsWith(config.prefix) || message.author.bot ) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          let commandd = require(`../commands/${file}`);
          let commandName = file.split(".")[0];
          if (commandName == command) { commandd.run(bot,message,args); }
        });
    });
};