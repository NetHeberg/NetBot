exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle("Bonjour "+message.author.username)
      .setDescription("Mon ping est de : "+client.ws.ping+"ms")
      .setColor("RANDOM")
      .setFooter("netheberg.fr");
    message.channel.send(embed);
  
};