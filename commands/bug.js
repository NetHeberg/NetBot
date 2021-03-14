exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const embed = new MessageEmbed()
    .setTitle("Page d'aide sur le signalement de bugs")
    .setDescription(
      "**Clé de Validation : ** ``netheberg.fr``\n\n" +
        "[signaler un bug](https://api-netbot.nhx.fr/signalement)"
    )
    .addField(
      "Articles en rapport avec NetBug : ",
      "[Intro](https://docs.api-netbot.nhx.fr/netbug/intro)\n[Une clé de validation ?](https://docs.api-netbot.nhx.fr/netbug/une-cle-de-validation)\n[Comment créer un bon report de bug](https://docs.api-netbot.nhx.fr/netbug/comment-creer-un-bon-report-de-bug)\n[Votre aide compte !](https://docs.api-netbot.nhx.fr/netbug/votre-aide-compte)"
    )
    .setThumbnail(
      "https://api-netbot.nhx.fr/assets/images/logo.png"
    )
    .setColor("2f3136");
  message.channel.send(embed);
  setTimeout(function () {
    message.delete();
  }, 1000);
};
