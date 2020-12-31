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
      if (response.data[message.author.id].permissions < 4)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      if (message.channel.parent.id !== "688464727432888414")
        return message.reply(
          "Cette commande ne peut être faite que dans les ticket."
        );
      let myRole = message.guild.roles.cache.get("748231391614861433");
      const embed = new MessageEmbed()
        .setTitle("Changement de permissions")
        .setDescription(
          "Les supports ont été retirés du ticket par <@!" +
            message.author +
            ">"
        )
        .setColor("2f3136");
      message.channel.send(embed);
      message.channel.updateOverwrite("688464705198620709", {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false,
        ATTACH_FILES: false,
      });
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
