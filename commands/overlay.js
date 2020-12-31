exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(1000, 1000);
  const ctx = canvas.getContext("2d");

  const img1 = await Canvas.loadImage(
    message.author.avatarURL({ dynamic: true, size: 512, format: "png" })
  );
  const img2 = await Canvas.loadImage("https://i.ibb.co/9hnwR4z/cadre.png");

  ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(img2, 0, 0, canvas.width, canvas.height);
  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "image.png"
  );

  var idinfo = new Discord.MessageEmbed()
    .setTitle("Votre nouvelle photo de profil")
    .setDescription("Avec une petite touche de NetHeberg :smile:")
    .attachFiles([attachment])
    .setImage("attachment://image.png")
    .setColor("2f3136");
  message.channel.send(idinfo).catch((error) => {
    console.log(error);
  });
};
