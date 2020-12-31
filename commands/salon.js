exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const axios = require("axios");

  axios
    .get("https://api.net-bot.tk/staff/permissions.json")
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          "Seul un membre du personnel de NetHeberg peut faire cette action."
        );
      if (response.data[message.author.id].permissions < 2)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      const embed1 = new MessageEmbed()
        .setTitle("Mauvais Salon")
        .setDescription(
          "Un modérateur à remarqué que vous utilisiez le mauvais salon pour le sujet abordé.\nLe modérateur vous conseille d'utiliser le salon approprié pour continuer cette discussion."
        )
        .setColor("#E58A06");
      if (!args[0]) {
        message.channel.send(embed1);
        setTimeout(function () {
          message.delete();
        }, 1000);
        return;
      }
      const embed2 = new MessageEmbed()
        .setTitle("Mauvais Salon")
        .setDescription(
          "Un modérateur à remarqué que vous utilisiez le mauvais salon pour le sujet abordé.\nLe modérateur vous conseille d'utiliser le salon approprié pour continuer cette discussion."
        )
        .setColor("#E58A06");
      if (!args[0].startsWith("<#")) {
        message.channel.send(embed2);
        setTimeout(function () {
          message.delete();
        }, 1000);
        return;
      }
      const embed = new MessageEmbed()
        .setTitle("Mauvais Salon")
        .setDescription(
          "Un modérateur à remarqué que vous utilisiez le mauvais salon pour le sujet abordé.\nLe modérateur vous conseille d'utiliser le salon " +
            args +
            " pour continuer cette discussion."
        )
        .setColor("#E58A06");
      message.channel.send(embed);
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
