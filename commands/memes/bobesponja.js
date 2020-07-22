const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (bot,message,args) => {
    const text = args.join(separator = ' ');

    const canvas = Canvas.createCanvas(460,650);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./img/bobesponja.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '26px sans-serif';
    ctx.fillStyle = '#000';
    ctx.fillText(text, 50, 100);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'monstro.png');

    message.channel.send(attachment);
};