const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs");
const manage_roles = require('../modules/manage_roles');
const AntiSpam = require('discord-anti-spam');
const ServerConfig = require('../models/ServerConfig');

const antiSpam = new AntiSpam({
	warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 15, // Amount of messages sent in a row that will cause a ban.
	muteThreshold: 5, // Amount of messages sent in a row that will cause a mute.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, pare de spammar.', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** foi kickado por spam.', // Message that will be sent in chat upon kicking a user.
	banMessage: '**{user_tag}** foi banido por spam.', // Message that will be sent in chat upon banning a user.
	muteMessage: '**{user_tag}** foi mutado por spam.', // Message that will be sent in chat upon muting a user.
	maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 15, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 22, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesMute: 9, // Amount of duplicate messages that trigger a warning.
	// Discord permission flags: https://discord.js.org/#/docs/main/master/class/Permissions?scrollTo=s-FLAGS
	exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions(These are not roles so use the flags from link above).
	ignoreBots: true, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [], // Array of User IDs that get ignored.
	// And many more options... See the documentation.
});

exports.run = async (bot, message) => {
    if(manage_roles.hasRole(message.member,"Rapid Muted") && message.channel.type !== 'dm'){
        return message.delete();
    }
    
    const server = await ServerConfig.findOne({guild: message.guild.id});
    if (server) if(server.antispam === true) antiSpam.message(message);
    
	if(message.channel.type === 'dm' || !message.content.startsWith(config.prefix) || message.author.bot ) return;
    if(message.content === "r!join") bot.emit("guildMemberAdd",message.member);
    if(message.content === "r!wmsg") bot.emit("guildCreate",message.guild);
    

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
                        try{ if (commandName == command) { commandd. run(bot,message,args); } } catch (err) {console.error(err)}
                    });
                });
            } else {
                let commandd = require(`../commands/${file}`);
                let commandName = file.split(".")[0];
                try{ if (commandName == command) { commandd.run(bot,message,args); } } catch(err) { console.error(err) }
            }
        });
    });
};