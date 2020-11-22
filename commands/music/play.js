const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const yt_search = require('youtube-search');
const config = require('../../config.json');

const opts = {
    maxResults: 10,
    key: config.YT_API
};

exports.run = async (bot,message,args) => {
    const guild = message.guild.id;
    const voice_channel = message.member.voice.channel;
    if(!args[0] && !args.link) return message.channel.send("\\❌ Digite o link/nome da música. Ex: r!play Bonde da Stronda");
    if(!message.member.voice.channel) return message.channel.send("\\❌ Você deve estar em um canal de voz!");
    const connection = await voice_channel.join();

    const get_results = async (search) => {
        search = search.join(separator=' ');

        const x = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
        const {results} = await yt_search(search,opts);

        let rs = {};
        results.map((value, i) => {
            if (value.kind !== "youtube#channel"){
                rs[x[i]] = value;
            }
        });

        const msg = new Discord.MessageEmbed()
            .setTitle("Search: " + search)
            .setColor("#ff0015")
            .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
            .setDescription(
                results.map((value, i) => {
                    return (
                        `**${i}.** ${value.title}`
                    )
                })
            )
            .setFooter(`${message.author.username}`,message.author.avatarURL());

        const _ = await message.channel.send(msg);
        await _.react("0️⃣");
        await _.react("1️⃣");
        await _.react("2️⃣");
        await _.react("3️⃣");
        await _.react("4️⃣");
        await _.react("5️⃣");
        await _.react("6️⃣");
        await _.react("7️⃣");
        await _.react("8️⃣");
        await _.react("9️⃣");

        const filter = (reaction, user) => user.id === message.author.id;
        const collector = _.createReactionCollector(filter, { time: 15000 });
        
        collector.on('collect', r => {
            const video = rs[r._emoji.name];
            if (video) play(connection,video);
        });
        setTimeout(() => {_.delete()},15000);

    }

    const play = async (connection,link) => {
        const playing = bot.playing[`${guild}`];

        let dispatcher;

        if(!playing){
            dispatcher = connection.play(ytdl(link.link, { filter: 'audioonly' }));
            bot.dispatcher[`${guild}`] = dispatcher;
            bot.playing[`${guild}`] = link;
        } else {
            bot.queue[`${guild}`] ? bot.queue[`${guild}`].push(link) : bot.queue[`${guild}`] = [link];
            
            const queue_message = new Discord.MessageEmbed()
                .setTitle(link.title)
                .setColor("#ff0015")
                .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
                .setURL(link.link)
                .setDescription(`Adicionado a fila de reprodução!`)
                .setThumbnail(link.thumbnails.high.url)
                .addFields(
                    { name: 'Canal', value: link ? link.channelTitle : 'None' },
                    { name: 'Descrição', value: link ? link.description : 'None'}
                )
                .setFooter(`Selecionado por ${message.author.username}`,message.author.avatarURL());
            return message.channel.send(queue_message);
        }

        dispatcher.on('start', () => {
            const playing_message = new Discord.MessageEmbed()
                .setTitle(link.title)
                .setColor("#ff0015")
                .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
                .setURL(link.link)
                .setDescription(`Tocando no canal de voz: ${connection.channel.name}`)
                .setThumbnail(link.thumbnails.high.url)
                .addFields(
                    { name: 'Canal', value: link ? link.channelTitle : 'None' },
                    { name: 'Descrição', value: link ? link.channelTitle : 'None' }
                )
                .setFooter(`Selecionado por ${message.author.username}`,message.author.avatarURL());

            message.channel.send(playing_message);
        });
        
        dispatcher.on('finish', () => {
            if (!bot.loop[`${guild}`]){
                const next = bot.queue[`${guild}`] ? bot.queue[`${guild}`].shift() : null;
                bot.playing[`${guild}`] = false;
                
                if(next){
                    play(connection,next);
                } else {
                    message.member.voice.channel.leave();
                }
            } else {
                play(connection,bot.playing[`${guild}`]);
            }
        });
        
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
    }

    if (args.link){
        return play(connection,args);
    } else {
        return get_results(args);
    }
};