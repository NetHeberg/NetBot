exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  if (message.author.id !== "495874584650842123") return;
  const embed1 = new MessageEmbed()
    .setDescription(
      "Bonjour bonjour, c'est votre ami NetBot, J'ai le regret de vous annoncer que votre candidature ne répond pas à nos critètes :confused:. N'hésitez pas à retenter votre chance lors de la prochaine sessions de recrutements."
    )
    .setColor("2f3136")
    .setThumbnail(
      "https://api-netbot.nhx.fr/assets/images/logo.png"
    );
  client.users.cache.get(args[0]).send(embed1);
  message.channel.send("Message d'entretient envoyé avec succès");
};
