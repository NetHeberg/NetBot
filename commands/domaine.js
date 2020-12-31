exports.run = async (client, message, args) => {
  var Discord = require("discord.js");

  const domainCheck = require("domain-check");
  const Domain = domainCheck.Domain;
  if (!args[0])
    return message.reply("vous ne m'avez donné aucun domaine :thinking:");
  const domain = new Domain(args[0]);
  let result = await domain.isFree();
  console.log(result);
  if (result == false) {
    var embed = new Discord.MessageEmbed()
      .setTitle("Le domaine " + args[0] + " n'est pas libre")
      .setColor("RED");
    message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
      .setTitle("Le domaine " + args[0] + " est libre")
      .setColor("GREEN");
    message.channel.send(embed);
  }
};
