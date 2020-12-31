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
      if (response.data[message.author.id].permissions < 1)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      const embed1 = new MessageEmbed()
        .setTitle("Carte Staff de " + message.member.displayName)
        .setDescription(
          "__**Nom enregistré :**__ " +
            response.data[message.author.id].nom +
            "\n__**Niveau de permissions :**__ " +
            response.data[message.author.id].permissions +
            "\n__**Rang NetBot :**__ " +
            response.data[message.author.id].rang
        )
        .setThumbnail(message.author.avatarURL())
        .setColor("#E58A06");
      message.channel.send(embed1);
    });
};
