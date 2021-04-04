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
      const embed = new MessageEmbed()
        .setTitle("F.A.Q sur NetHeberg")
        .setDescription(
          "**__Pourquoi donc faire du gratuit ?__**\n" +
            "Nous savons que l'informatique fait le monde de demain, donc nous proposons, gratuitement, l'hébergement de vos projets, pour que chacun puisse professionnellement ou personnellement se développer sans contrainte financière." +
            "\n\n**__Comment NetHeberg est t'il financé ?__**\n" +
            "NetHeberg est financé en très grande partie par des budgets définis, des dons et, bientôt, nous l'espérons, grâce à des subventions." +
            "\n\n**__En quoi NetHeberg est-il eco-responsable ?__**\n" +
            "Bien que nous n'ayons pas les moyens d'acheter et d'entretenir des serveurs physiques, afin de nous assurer que ceux-ci soient le plus écologiques possible, nous compensons par la mise en avant et l'aide à des associations écologiques environnementale."
        )
        .setColor("2f3136");
      message.channel.send(embed);
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
