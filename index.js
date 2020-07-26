const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');

const mongoose = require('mongoose');
mongoose.connect(config.DATABASE_LINK,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

bot.login(config.token);
bot.queue = {};
bot.playing = {};
bot.dispatcher = {};
bot.loop = {};

bot.on('ready', () => {
    console.log(`Bot iniciado e online em ${bot.guilds.cache.size} servidores!`);
    bot.user.setActivity("Bot open-source para gerenciamento de servidores,ouvir músicas e muito mais! https://github.com/ReddyyZ/Rapid", { type: "PLAYING"});
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});