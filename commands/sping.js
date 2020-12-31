exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const fs = require("fs");
  const axios = require("axios");

  axios
    .get("https://api.net-bot.tk/staff/permissions.json")
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          "Seul un membre du personnel de NetHeberg peut faire cette action."
        );
      if (response.data[message.author.id].permissions < 1)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );

      let msg = require("./sping.json");
      if (!msg[message.author.id]) {
        msg[message.author.id] = {
          content: "off",
          auto: "off",
          accepted: "no",
        };
      }

      fs.writeFile("./sping.json", JSON.stringify(msg), (err) => {
        if (err) console.log(err);
      });
      let userMSG = msg[message.author.id].content;
      let accept = msg[message.author.id].accepted;
      const embed = new MessageEmbed()
        .setTitle(
          "OOPS, vous venez de mentionner un membre du staff de NetHeberg"
        )
        .setDescription(
          "Le staff de NetHeberg est à votre disposition pour toute question concernant NetHeberg (problèmes avec votre hébergement, indisponibilité des services,...) Cependant, veuillez ne pas les déranger pour une raison ne concernant pas NetHeberg (sauf si le membre du staff l'autorise)."
        )
        .setFooter("(ce message est un message crée par défaut)")
        .setColor("#E58A06");
      const embed2 = new MessageEmbed()
        .setTitle(
          "OOPS, vous venez de mentionner un membre du staff de NetHeberg"
        )
        .setDescription(userMSG)
        .setFooter("(ce message est un message crée par le staff mentionné)")
        .setColor("#E58A06");
      if (accept == "no") {
        message.channel.send(embed);
        setTimeout(function () {
          message.delete();
        }, 1000);
        return;
      }
      message.channel.send(embed2);
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
