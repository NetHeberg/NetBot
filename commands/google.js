exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  let google = args.slice(0).join("+");
  let link =
    `https://www.google.com/search?q=` +
    google +
    `&oq=thisis&aqs=chrome..69i57j0l5.2905j0j9&sourceid=chrome&ie=UTF-8`;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
    );
  if (!args[0]) {
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : Utilisation : n!google + ta recherche"
    );
  } else {
    var embed = new Discord.MessageEmbed()
      .setTitle("Recherche Google")
      .setDescription("Ton lien : " + "[clique-ici](" + link + ")")
      .setThumbnail(
        "https://api-netbot.nhx.fr/assets/images/google.png"
      )
      .setColor("RANDOM")
      .setFooter("netheberg.fr");
    message.channel.send(embed);
  }
};
