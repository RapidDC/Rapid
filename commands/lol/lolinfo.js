const {LolApi, Constants} = require('twisted');
const Discord = require('discord.js');

const api = new LolApi({
    key: 'RGAPI-b694c86c-8903-4c1b-bcd9-dc15ae89a2d6'
});

exports.run = async (bot,message,args) => {
    const toTitleCase = (str) => {return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});}
    const summonerName = args.join(separator = ' ');
    const region = Constants.Regions.BRAZIL;

    const y = await api.Summoner.getByName(summonerName, region);
    const k = await api.League.bySummoner(y.response.id,region);
    const x = await api.Match.list(y.response.accountId,region);
    const { queueType, tier, rank, wins, losses } = k.response[0];

    const maestrias = await (await api.Champion.masteryBySummoner(k.response[0].summonerId, region)).response.slice(0,3);

    const msg = new Discord.MessageEmbed()
        .setTitle(`${summonerName} - ${region}`)
        .setColor("#ff0015")
        .setDescription(`**Nível:** ${y.response.summonerLevel}\n`)
        .addFields(
            {
                name: "Maestrias",
                value: `**1.** ${toTitleCase(Constants.getChampionName(maestrias[0].championId))} - ${maestrias[0].championPoints.toLocaleString("en")}\n**2.** ${toTitleCase(Constants.getChampionName(maestrias[1].championId))} - ${maestrias[1].championPoints.toLocaleString("en")}\n**3.** ${toTitleCase(Constants.getChampionName(maestrias[2].championId))} - ${maestrias[2].championPoints.toLocaleString("en")}`
            },
            { name: `**${toTitleCase(queueType.split('_').join(separator=' '))}**`, value: `**Rank:** ${tier} ${rank}\n**Wins:** ${wins}\n**Losses:** ${losses}` },
            {
                name: "**Histórico**",
                value: x.response.matches.slice(0,10).map(match => {
                    const data = new Date(match.timestamp);
                    return (
                        `**${toTitleCase(Constants.getChampionName(match.champion))}** - ${data.getDate()+'-'+data.getMonth()+'-'+data.getFullYear()}`
                    )
                })
            }
        );

    message.channel.send(msg);
}