exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const weather = require("weather-js");
  weather.find(
    { search: args.join(" "), degreeType: "C" },
    function (err, result) {
      if (!args[0]) {
        message.channel.send(
          "<a:arminerror:617366968554618943> ERREUR : **Entrez une location !**"
        );
        return;
      }
      if (result === undefined || result.length === 0) {
        const embed = new Discord.MessageEmbed()
          .setTitle("Oops, quelque chose s'est mal passé.")
          .setDescription(
            `**Erreur :**` + "```" + "Localisation inconnue" + "```"
          )
          .setFooter("netheberg.fr")
          .setColor("RED");
        message.channel.send(embed);
        return;
      }
      if (err) {
        const embed = new Discord.MessageEmbed()
          .setTitle("Oops, quelque chose s'est mal passé.")
          .setDescription(`**Erreur :**` + "```" + err + "```")
          .setFooter("netheberg.fr")
          .setColor("RED");
        message.channel.send(embed);
        return;
      }
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(
          "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
        );
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Météo pour ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00ae86)
        .addField("Fuseau horaire", `UTC${location.timezone}`, true)
        .addField("Température", `${current.temperature}°C`, true)
        .addField("Vents", current.winddisplay, true)
        .addField("Humidité", `${current.humidity}%`, true)
        .setFooter("netheberg.fr");
      message.channel.send({ embed });
    }
  );
};
