exports.run = (client, message, args) => {
  var Discord = require("discord.js");

  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
    );
  if (!message.guild.member(client.user).hasPermission("ATTACH_FILES"))
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Attacher des Fihiers``"
    );
  let embed = new Discord.MessageEmbed().setFooter("netheberg.fr");

  let mention = message.mentions.users.first();

  if (!args[0]) {
    var user = message.author;
    let image = user.displayAvatarURL({
      dynamic: true,
      size: 512,
      format: "png",
    });
    embed.setAuthor(`${user.username}#${user.discriminator}`);
    embed.setImage(image);
    return message.channel.send(embed);
  }

  if (mention) {
    var user = message.mentions.users.first();
    let image = user.displayAvatarURL({
      dynamic: true,
      size: 512,
      format: "png",
    });
    embed.setAuthor(`${user.username}#${user.discriminator}`);
    embed.setImage(image);
    return message.channel.send(embed);
  }
  if (args[0]) {
    let user = client.users.cache.get(args[0]);
    if (user == undefined)
      return message.channel.send(
        "<a:arminerror:617366968554618943> ERREUR : L'identifiant n'existe pas dans la base de données"
      );
    embed.setAuthor(`${user.username}#${user.discriminator}`);
    embed.setImage(user.avatarURL({ dynamic: true, size: 512, format: "png" }));
    message.channel.send(embed);
    return;
  } else {
    return message.channel.send("ID invalide");
  }
};
