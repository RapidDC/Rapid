const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (bot,message,args) => {
    const text = args.join(separator = ' ');

    const canvas = Canvas.createCanvas(482,361);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./img/changemymind.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '26px sans-serif';
    ctx.fillStyle = '#000';
    ctx.rotate(-Math.PI/22);
    ctx.fillText(text, 185, 300);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'monstro.png');

    message.channel.send(attachment);
};