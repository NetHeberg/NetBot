exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const fs = require("fs");
  if (message.channel.id !== "751716158129832036") return;
  let sping = require("./sping.json");
  sping[args[0]].accepted = "yes";
  fs.writeFile("./sping.json", JSON.stringify(sping), (err) => {
    if (err) message.channel.send("ERREUR : ```" + err + "```");
  });
  message.channel.send("succès");
  const embed2 = new MessageEmbed()
    .setTitle("Félicitations !")
    .setDescription(
      "Votre message personnalisé à été accepté par un Haut-Staff ! Il s'affichera maintenant dans votre commande n!sping"
    )
    .setColor("GREY");
  client.users.cache.get(args[0]).send(embed2);
};
