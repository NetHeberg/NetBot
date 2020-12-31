exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const embed = new MessageEmbed()
    .setTitle("Page d'aide sur le NetBot")
    .setDescription(
      "Commandes NetBot : [cliquez ici](https://netbot.icero.xyz/commandes-utilisateurs/utiliser-les-commandes-simples-de-netbot)\n" +
        "Commandes NetPanel : ``p!help``"
    )
    .setThumbnail(
      "https://images.netheberg.fr/i/CWQ3SJzhtA6jLyUluDRpceBYXn7H25s4Ivf8mbP1Mdwrig9ZNoEFxTqkGVKO.png"
    )
    .setColor("2f3136");
  message.channel.send(embed);
  setTimeout(function () {
    message.delete();
  }, 1000);
};
