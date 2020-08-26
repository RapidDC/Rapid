const Discord = require("discord.js");
const ServerConfig = require("../../models/ServerConfig");

exports.run = async (bot,message,args) => {
    const sleep = (ms) => {return new Promise((resolve) => setTimeout(resolve,ms))};

    const guild = message.guild;

    if (!message.member.roles.cache.has('Rapid Admin') && !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Você não tem permissão para executar este comando!");
    }

    const filter = (reaction,user) => ['✅', '❌'].includes(reaction.emoji.name);
    const embed = new Discord.MessageEmbed()
        .setColor("#ff0015")
        .setTitle('Rapid Bot')
        .setURL('https://google.com')
        .setDescription('Deseja habilitar o sistema Anti-Flood?')
        .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
        .setTimestamp();

    const msg = await message.channel.send(embed);
    await msg.react('✅');
    await msg.react('❌');

    await sleep(500)

    msg.awaitReactions(filter,{ max: 1, time: 120000, errors: ['time'] }).then(async (collected) => {
        const reaction = collected.first();

        if (reaction._emoji.name === '✅'){
            const s = await ServerConfig.findOne({guild: guild.id,});

            if (!s) {
                await ServerConfig.create({
                    guild: guild.id,
                    antispam: true,
                    joinedAt: new Date().getTime(),
                });
            } else {
                await ServerConfig.findOneAndUpdate({guild: guild.id}, {
                    antispam: true,
                    joinedAt: new Date().getTime()
                });
            }

            msg.channel.send("Anti-Flood habilitado!");
        } else {
            const s = await ServerConfig.findOne({guild: guild.id,});

            if (!s) {
                await ServerConfig.create({
                    guild: guild.id,
                    antispam: false,
                    joinedAt: new Date().getTime(),
                });
            } else {
                await ServerConfig.findOneAndUpdate({guild: guild.id}, {
                    antispam: false,
                    joinedAt: new Date().getTime()
                });
            }

            msg.channel.send("Anti-Flood desabilitado!");
        }
    }).catch(collected => {
        message.channel.send("Ocorreu algum erro");
    });
};