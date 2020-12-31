module.exports = async (client, message) => {
  const Discord = require("discord.js");
  if (message.author.bot) return;
  if (message.content.startsWith("n!")) return;
  let embed = new Discord.MessageEmbed()
    .setTitle("Message supprimé")
    .addField("🧑 Utilisateur :", "<@!" + message.author.id + ">")
    .addField("🔊 Dans le salon :", "<#" + message.channel.id + ">")
    .addField("🔖 Sur le serveur : ", message.guild.name)
    .setColor("BLURPLE")
    .setThumbnail(
      message.author.avatarURL({ dynamic: true, size: 512, format: "png" })
    );
  if (message.content !== "") {
    embed.setDescription("```" + message.content + "```");
  }
  if (message.attachments.size > 0) {
    embed.addField(
      "🖼️ Contenait des images : ",
      "Ce message contenait des images, l'api de Discord m'empêche d'y accéder."
    );
  }
  client.channels.cache.get("741394411543592972").send(embed);
};
