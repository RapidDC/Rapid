const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const yt_search = require('youtube-search');
const config = require('../../config.json');

const opts = {
    maxResults: 10,
    key: config.YT_API
};

exports.run = async (bot,message,args) => {
    const play = async (connection,link) => {
        let dispatcher = connection.play(ytdl(link.link, { filter: 'audioonly' }));
        bot.dispatcher = dispatcher;

        dispatcher.on('start', () => {
            console.log('audio.mp3 is now playing!');
            bot.playing = true;
            const playing_message = new Discord.MessageEmbed()
                .setTitle(link.title)
                .setColor("#ff0015")
                .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
                .setURL(link.link)
                .setDescription(`Tocando no canal de voz: ${connection.channel.name}`)
                .setThumbnail(link.thumbnails.high.url)
                .addFields(
                    { name: 'Canal', value: link.channelTitle },
                    { name: 'Descrição', value: link.description }
                )
                .setFooter(`Selecionado por ${message.author.username}`,message.author.avatarURL());

            message.channel.send(playing_message);
        });
        
        dispatcher.on('finish', () => {
            console.log('audio.mp3 has finished playing!');
            bot.playing = false;

            const next = bot.queue.shift();

            if(next){
                play(connection,next);
            } else {
                message.member.voice.channel.leave();
            }
        });
        
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
    }

    if(!args[0]) return message.channel.send("Digite o link da música. Ex: r!play https://www.youtube.com/watch?v=KJrdDg");
    if(!message.member.voice.channel) return message.channel.send("Você deve estar em um canal de voz!");

    const voice_channel = message.member.voice.channel;

    if (bot.playing) {
        if (!args[0].startsWith('http')){
            const {results} = await yt_search(args.join(separator=' '),opts);
            if (!results[0]) return message.channel.send("Nenhum resultado encontrado!");

            const queue_message = new Discord.MessageEmbed()
                .setTitle(results[0].title)
                .setColor("#ff0015")
                .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
                .setURL(results[0].link)
                .setDescription(`Adicionado a fila de reprodução!`)
                .setThumbnail(results[0].thumbnails.high.url)
                .addFields(
                    { name: 'Canal', value: results[0].channelTitle },
                    { name: 'Descrição', value: results[0].description }
                )
                .setFooter(`Selecionado por ${message.author.username}`,message.author.avatarURL());

            bot.queue.push(results[0]);
            return message.channel.send(queue_message);

        } else {
            const {results} = await yt_search(args[0],opts);
            if (!results[0]) return message.channel.send("Nenhum resultado encontrado!");

            const queue_message = new Discord.MessageEmbed()
                .setTitle(results[0].title)
                .setColor("#ff0015")
                .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
                .setURL(results[0].link)
                .setDescription(`Adicionado a fila de reprodução!`)
                .setThumbnail(results[0].thumbnails.high.url)
                .addFields(
                    { name: 'Canal', value: results[0].channelTitle },
                    { name: 'Descrição', value: results[0].description }
                )
                .setFooter(`Selecionado por ${message.author.username}`,message.author.avatarURL());

            bot.queue.push(results[0]);
            return message.channel.send(queue_message);
        }
    }

    const connection = await voice_channel.join();

    const {results} = await yt_search(args.join(separator=' '),opts);
    if (!results[0]) return message.channel.send("Nenhum resultado encontrado!");

    play(connection,results[0]);
};