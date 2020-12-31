exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  if (!args[0])
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : Aucune question ne m'est posée."
    );
  let replies = [
    "Oui :8ball:",
    "Non :8ball:",
    "Je ne peux pas répondre à ta question :thinking:",
    "Le FBI refuse que je te donne la réponse...",
  ];

  let result = Math.floor(Math.random() * replies.length);
  let question = args.slice().join(" ");

  let embedfr = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " me demande: " + question)
    .setColor("#D3D3D3")

    .addField("Réponse", replies[result])
    .setFooter("netheberg.fr");

  message.channel.send(embedfr);
};
