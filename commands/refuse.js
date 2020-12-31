exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const fs = require("fs");
  if (message.channel.id !== "751716158129832036") return;
  let sping = require("./sping.json");
  sping[args[0]].accepted = "no";
  fs.writeFile("./sping.json", JSON.stringify(sping), (err) => {
    if (err) message.channel.send("ERREUR : ```" + err + "```");
  });
  message.channel.send("succès");

  const embed2 = new MessageEmbed()
    .setTitle("OOps !")
    .setDescription(
      "Votre message personnalisé à été refusé par un Haut-Staff :/\nGénéralement, ce problème arrive quand votre message n'est pas approprié. Modifiez le et renvoyez la demande :smile:"
    )
    .setColor("GREY");
  client.users.cache.get(args[0]).send(embed2);
};
