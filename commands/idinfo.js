exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const axios = require("axios");

  axios
    .get("https://api-netbot.nhx.fr/staff/permissions.json")
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          "Seul un membre du personnel de NetHeberg peut faire cette action."
        );
      if (response.data[message.author.id].permissions < 3)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(
          ":x: ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
        );
      if (!args[0]) return message.channel.send(":x: ERREUR : Aucun ID donné");
      if (args[0].length !== 18)
        return message.channel.send(
          ":x: ERREUR : L'identifiant donné est trop long ou trop petit, un ID comporte 18 caractères."
        );
      let user = client.users.cache.get(args[0]);
      if (user == undefined)
        return message.channel.send(
          ":x: ERREUR : L'identifiant n'existe pas dans la base de données"
        );
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var idinfo = new Discord.MessageEmbed()
        .setTitle("Info pour l'Identifiant " + args)
        .addField("Tag", user.tag)
        .addField(
          "Créé le",
          user.createdAt.toLocaleDateString("fr-FR", options)
        )
        .addField("Status", user.presence.status)
        .addField(
          "Joue à",
          `${
            user.presence.activities
              ? user.presence.activities
              : "[Ne joue à rien]"
          }`
        )
        .setThumbnail(user.avatarURL())
        .setFooter("netheberg.fr");
      message.channel.send(idinfo);
    });
};
