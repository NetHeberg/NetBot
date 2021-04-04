exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  if (!args[0]) return message.channel.send("Aucune ip fournie");

  const request = require("request");

  request(
    "https://api.mcsrvstat.us/2/" + args[0],
    { json: true },
    (err, res, body) => {
      console.log(body);
      let ipdiv = args[0].split(".");
      if (ipdiv[1].includes("aternos"))
        return message.channel.send(
          "<a:arminerror:617366968554618943> ERREUR : Les serveurs Aternos ne sont pas pris en charge"
        );
      if (body.online === true) {
        let pourcentage = (body.players.online / body.players.max) * 100;

        const embed = new Discord.MessageEmbed()
          .setTitle("Infos pour le serveur " + args[0])
          .setDescription("**Etat :** En Ligne")
          .addField(
            "Joueurs en ligne",
            body.players.online +
              "/" +
              body.players.max +
              " ( " +
              Math.round(pourcentage) +
              "% )"
          )
          .addField("Description du Serveur", body.motd.clean)
          .addField("Version", body.version)
          .addField(
            "Infos Serveur",
            "**IP : **" +
              body.ip +
              "\n**Port : **" +
              body.port +
              "\n**Protocole : **" +
              body.protocol
          )
          .setThumbnail("https://api.mcsrvstat.us/icon/" + args[0])
          .setColor("GREEN");
        if (body.players.list) {
          if (body.players.list.length < 30) {
            embed.addField(
              "Joueurs en ligne : ",
              "- " + body.players.list.join("\n- ")
            );
            message.channel.send(embed);
            return;
          }
        }
        message.channel.send(embed);
      } else {
        if (body.ip == false) {
          const embederror = new Discord.MessageEmbed()
            .setTitle("Infos pour le serveur " + args[0])
            .setDescription("**Etat :** Inconnu")
            .addField(
              "Pourquoi ça n'a pas marché ?",
              "Liste des raisons les plus fréquentes\n\n- L'ip envoyée est incorrecte\n- Le serveur n'existe pas"
            )
            .setThumbnail("https://api-netbot.nhx.fr/assets/images/question.png")
            .setColor("ORANGE");
          return message.channel.send(embederror);
        }
        const embederror = new Discord.MessageEmbed()
          .setTitle("Infos pour le serveur " + args[0])
          .setDescription("**Etat :** Hors-Ligne")
          .addField(
            "Raisons possibles",
            "- Le serveur est simplement éteint,\n- Le serveur a existé un jour mais n'existe plus maintenant"
          )
          .setThumbnail(
            "https://api-netbot.nhx.fr/assets/images/hors-ligne.png"
          )
          .setColor("RED");

        return message.channel.send(embederror);
      }
      if (err) {
        return console.log(err);
      }
    }
  );
};
