const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (bot,message,args) => {
    const channel = message.guild.channels.cache.find(channel => channel.name === 'member-log');
    if(!channel) return;

    const canvas = Canvas.createCanvas(700,450);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./img/bolsonaro1.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachments = message.attachments.map(attachment => {return attachment});

    const image = await Canvas.loadImage(attachments[0].url);
    ctx.drawImage(image, 317, 100, 287, 175);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bolsonaro.png');

    channel.send(attachment);
};