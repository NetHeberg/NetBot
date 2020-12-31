exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const fs = require("fs");
  if (!message.member.roles.cache.has("741364133106286592"))
    return message.reply(
      "cette commande ne peut-être executée que sur le serveur du personnel de NetHeberg."
    );
  if (!args[0]) return message.reply("Aucun message donné.");
  const embed = new Discord.MessageEmbed()
    .setTitle("Demande Envoyée")
    .setDescription(
      "Votre nouveau message de ping à été modifié et sera examiné par un haut-staff sous très peu de temps. Vous recevrez un message privé à la fin de la vérification"
    )
    .setColor("GREY");
  const embedC = new Discord.MessageEmbed()
    .setTitle("Demande Acceptée")
    .setDescription(
      "Votre nouveau message de ping à été modifié. Votre position fait qu'il à été accepté automatiquement."
    )
    .setColor("GREY");
  let sping = require("./sping.json");
  if (!sping[message.author.id]) {
    sping[message.author.id] = {
      content: "off",
      auto: "off",
      accepted: "no",
    };
  }
  sping[message.author.id].content = args.join(" ");
  if (message.member.roles.cache.has("741363365133418528")) {
    sping[message.author.id].accepted = "yes";
    message.channel.send(embedC);
  } else {
    sping[message.author.id].accepted = "no";
    message.channel.send(embed);
    const embed2 = new Discord.MessageEmbed()
      .setTitle("Demande de modification de n!sping")
      .setDescription(args.join(" "))
      .addField("demande de ", message.author.username)
      .setFooter(
        "Acceptez avec la commande n!accept " +
          message.author.id +
          "\nRefusez avec la commande n!refuse " +
          message.author.id
      )
      .setColor("GREY");
    client.channels.cache.get("751716158129832036").send(embed2);
  }

  fs.writeFile("./sping.json", JSON.stringify(sping), (err) => {
    if (err) console.log(err);
  });
};
