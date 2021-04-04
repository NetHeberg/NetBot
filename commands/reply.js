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
      let user;
      user =
        message.guild.member(message.mentions.users.first()) ||
        message.guild.members.cache.get(args[0]);
      let link = args.join(` `).slice(22);

      if (!user)
        return message.reply(
          "cette commande demande la mention d'un utilisateur"
        );

      let embed = new Discord.MessageEmbed()
        .setTitle(
          "Votre question à déjà reçu une réponse officielle d'un de nos membres du personnel"
        )
        .setDescription("• [Voir la réponse](" + link + ")")
        .setAuthor(user.user.username, user.user.avatarURL())
        .setColor("2f3136")
        .setFooter("netheberg.fr");
      message.delete();
      message.channel.send("<@!" + user.id + ">");
      message.channel.send(embed);
    });
};
