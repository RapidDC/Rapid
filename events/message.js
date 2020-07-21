const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
const manage_roles = require('../modules/manage_roles');

exports.run = (bot, message) => {
    // let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
    console.log(manage_roles.hasRole(message.member,"Rapid Muted"));
    if(manage_roles.hasRole(message.member,"Rapid Muted") && message.channel.type !== 'dm'){
        message.delete();
        // message.author.send(`Você não pode mandar mensagens no servidor ${message.guild.name}, pois você está mutado!`);
        return;
    }
    
	if(message.channel.type === 'dm' || !message.content.startsWith(config.prefix) || message.author.bot ) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    fs.readdir("./commands/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if(!file.endsWith('.js')){
                fs.readdir(`./commands/${file}`, (err, files2) => {
                    files2.forEach(file2 => {
                        let commandd = require(`../commands/${file}/${file2}`);
                        let commandName = file2.split(".")[0];
                        if (commandName == command) { commandd. run(bot,message,args); }
                    });
                });
            } else {
                let commandd = require(`../commands/${file}`);
                let commandName = file.split(".")[0];
                if (commandName == command) { commandd.run(bot,message,args); }
            }
        });
    });
};