exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  await message.delete();
  if (message.member.roles.cache.has("718800029296623666"))
    return message.reply("Vous avez déjà le rôle client");
  if (!args[0])
    return message.reply("Vous ne m'avez pas donné d'adresse email");
  var Eclient = new Discord.MessageEmbed()
    .setTitle("Demande envoyée")
    .setDescription(
      "Une demande à été envoyée afin de vous ajouter le rôle client.\nJe vous enverrai un message privé quand la demande aura été traitée"
    )
    .setColor("2f3136")
    .setFooter("netheberg.fr");
  var staff = new Discord.MessageEmbed()
    .setTitle("Demande reçue")
    .setDescription("Un client demande le rôle client")
    .addField(
      "Utilisateur",
      "<@!" + message.author.id + "> (" + message.author.username + ")"
    )
    .addField("Email donnée : ", args[0])
    .addField(
      "Actions disponibles",
      "_accept " + message.author.id + "\n_refuse " + message.author.id
    )
    .setColor("2f3136")
    .setFooter("netheberg.fr");

  await message.channel.send(Eclient);
  await client.channels.cache
    .get("747063735117414450")
    .send("<@&747068137043656765>");
  await client.channels.cache.get("747063735117414450").send(staff);
};
