exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const axios = require("axios");

  axios
    .get("https://api-netbot.nhx.fr/staff/permissions.json")
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          "Seul un membre du personnel de NetHeberg peut faire cette action."
        );
      if (response.data[message.author.id].permissions < 1)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      if (message.channel.parent.id !== "688464727432888414")
        return message.reply(
          "Cette commande ne peut être faite que dans les ticket."
        );
      const embed = new MessageEmbed()
        .setTitle("Techniciens appelés")
        .setDescription(
          "Les techniciens ont été appelés et ajoutés à ce ticket par <@!" +
            message.author +
            ">"
        )
        .setColor("2f3136");
      message.channel.send("<@&748231391614861433>");
      message.channel.send(embed);
      message.channel.updateOverwrite("748231391614861433", {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        READ_MESSAGE_HISTORY: true,
        ATTACH_FILES: true,
      });
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
