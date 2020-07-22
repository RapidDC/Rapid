const Discord = require("discord.js");
const Canvas = require("canvas");

exports.run = async (bot,message,args) => {
    const canvas = Canvas.createCanvas(700,450);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./img/bolsonaro2.jpeg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const attachments = message.attachments.map(attachment => {return attachment});

    let image;

    if(attachments[0]){
        image = await Canvas.loadImage(attachments[0].url);
    } else {
        image = await Canvas.loadImage(args[0]);
    }
    ctx.drawImage(image, 188, 21, 479, 306);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bolsonaro2.png');

    message.channel.send(attachment);
};