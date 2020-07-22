const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (bot,message,args) => {
    const text = args.join(separator = ' ');

    const canvas = Canvas.createCanvas(667,680);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./img/monstro.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '30px sans-serif';
    ctx.fillStyle = '#000';
    ctx.fillText(text, 4, 408);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'monstro.png');

    message.channel.send(attachment);
};