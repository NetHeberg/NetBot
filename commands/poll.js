const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  // Check for input
  if (!args[0])
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : Aucun sondage fourni"
    );

  // Create Embed
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("netheberg.fr")
    .setDescription("Utilisez les réactions pour donner votre avis")
    .addField("Contenu", "```" + args.join(" ") + "```")
    .addField("Créateur", message.member.displayName)
    .setTitle(`🗳️ **Sondage** 🗳️`);

  let msg = await message.channel
    .send(embed)
    .then(async function (msg) {
      await msg.react("713085772470681643");
      await msg.react("713085782574891110");
      await message.delete({ timeout: 1000 });
    })
    .catch(function (error) {
      console.log(error);
    });
};
