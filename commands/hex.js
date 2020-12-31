exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  if (!args[0]) return message.reply("Vous devez indiquer un code HEX");
  if (args[0].startsWith("#"))
    return message.reply("seul les codes sans # sont acceptés");
  const embed = new MessageEmbed()
    .setTitle("Preview HEX")
    .setThumbnail("https://api.alexflipnote.dev/color/image/" + args[0])
    .setImage("https://api.alexflipnote.dev/color/image/gradient/" + args[0])
    .setDescription("CODE : " + "#" + args[0])
    .setColor("#" + args[0]);
  message.channel.send(embed);
};
