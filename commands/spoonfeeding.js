exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  chann = ["735088574810292224", "738489059495641141"];
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

      if (!chann.includes(message.channel.id)) {
        setTimeout(function () {
          message.delete();
        }, 1000);
        return;
      }
      const embed = new MessageEmbed()
        .setTitle("Concernant le spoon-feeding ")
        .setDescription(
          "Il semblerait que vous ayez demandé des bouts de code ou demandé à quelqu'un de corriger votre code. En faisant cela, vous n'apprendrez rien. \nPar exemple, au lieu de dire ``J'ai une erreur dans mon code, quelqu'un peut me le corriger ?`` dites plûtot ``J'ai ce code erreur dans mon code, quelqu'un peut m'expliquer pourquoi ?``"
        )
        .setColor("#E58A06");
      message.channel.send(embed);
      setTimeout(function () {
        message.delete();
      }, 1000);
    });
};
