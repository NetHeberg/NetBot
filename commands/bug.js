exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const embed = new MessageEmbed()
    .setTitle("Page d'aide sur le signalement de bugs")
    .setDescription(
      "**Clé de Validation : ** ``netheberg.fr``\n\n" +
        "[signaler un bug](https://docs.google.com/forms/d/e/1FAIpQLSdBB70d8ADf-AbjNC1aJu_w8zjfePZ4Dc6rquuzWvXmhURe0w/viewform)"
    )
    .addField(
      "Articles en rapport avec NetBug : ",
      "[Intro](https://netbot.icero.xyz/netbug/intro)\n[Une clé de validation ?](https://netbot.icero.xyz/netbug/une-cle-de-validation)\n[Comment créer un bon report de bug](https://netbot.icero.xyz/netbug/comment-creer-un-bon-report-de-bug)\n[Votre aide compte !](https://netbot.icero.xyz/netbug/votre-aide-compte)"
    )
    .setThumbnail(
      "https://images.netheberg.fr/i/CWQ3SJzhtA6jLyUluDRpceBYXn7H25s4Ivf8mbP1Mdwrig9ZNoEFxTqkGVKO.png"
    )
    .setColor("2f3136");
  message.channel.send(embed);
  setTimeout(function () {
    message.delete();
  }, 1000);
};
