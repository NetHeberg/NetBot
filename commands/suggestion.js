const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(":x: ERREUR : Aucune suggestion proposée");

  const embed = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter("netheberg.fr")
    .addField("Suggestion", "```" + args.join(" ") + "```")
    .addField("Suggeré par", message.author.username)
    .setTitle(`🗳️ **Nouvelle suggestion** 🗳️`);

  let msg = await client.channels.cache
    .get("736908489074540604")
    .send(embed)
    .then(async function (msg) {
      await msg.react("✅");
      await msg.react("❌");
      await message.delete({ timeout: 1000 });
    })
    .catch(function (error) {
      console.log(error);
    });
  message.reply("Votre suggestion a été envoyée avec succès");
};
