exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const VirusTotalApi = require("virustotal-api");
  if (!args[0]) return message.reply("vous devez spécifier une url");
  if (!args[0].startsWith("http") && !args[0].startsWith("https"))
    return message.reply("Ceci n'est pas une URL valide");
  const virusTotal = new VirusTotalApi("/");

  virusTotal
    .urlScan(args[0])
    .then((response) => {
      let resource = response.scan_id;
      virusTotal
        .urlReport(resource)
        .then((result) => {
          let embed = new Discord.MessageEmbed()
            .setTitle("Scan sur URL")
            .setDescription("sur l'url : " + args[0]);
          if (result.positives == 0) {
            embed.addField(
              "Ce site semble sans danger",
              "Aucun des anti-virus n'ont détecté de programmes malveillants sur votre URL"
            );
            embed
              .setColor("GREEN")
              .setThumbnail("https://api-netbot.nhx.fr/assets/images/status/green.png");
            return message.channel.send(embed);
          } else if (result.positives > 2) {
            embed.addField(
              "ATTENTION ! Ce site contient du contenu pouvant endommager votre machine.",
              result.positives +
                " anti-virus sur un total de " +
                result.total +
                " ont détecté ce site comme dangereux."
            );
            embed
              .setColor("RED")
              .setThumbnail(
                "https://api-netbot.nhx.fr/assets/images/status/red.png"
              );
            return message.channel.send(embed);
          } else if (result.positives < 2) {
            embed.addField(
              "ATTENTION ! Ce site contient du contenu pouvant endommager votre machine.",
              result.positives +
                " anti-virus sur un total de " +
                result.total +
                " ont détecté ce site comme dangereux."
            );
            embed.setColor("ORANGE");
            embed.setThumbnail(
              "https://api-netbot.nhx.fr/assets/images/status/orange.png" 
            );
            embed.setFooter(
              "Le nombre de détections est relativement bas pour ce site. Ce scan peut-être un faux positif."
            );
            return message.channel.send(embed);
          } else {
            embed.addField(
              "Surcharge de l'api",
              "L'api semble surchargée, réessayez plus tard"
            );
            embed
              .setColor("PURPLE")
              .setThumbnail(
                "https://api-netbot.nhx.fr/assets/images/status/purple.png"
              );
            return message.channel.send(embed);
          }
        })
        .catch((Error) => {
          let embed = new Discord.MessageEmbed()
            .setTitle("Scan sur URL")
            .setDescription("sur l'url : " + args[0]);
          embed.addField(
            "Surcharge de l'api",
            "L'api semble surchargée, réessayez plus tard"
          );
          embed
            .setColor("PURPLE")
            .setThumbnail(
              "https://api-netbot.nhx.fr/assets/images/status/purple.png"
            );
          return message.channel.send(embed);
          console.log(error);
        });
    })
    .catch((Error) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Scan sur URL")
        .setDescription("sur l'url : " + args[0]);
      embed.addField(
        "Surcharge de l'api",
        "L'api semble surchargée, réessayez plus tard"
      );
      embed
        .setColor("PURPLE")
        .setThumbnail(
          "https://api-netbot.nhx.fr/assets/images/status/purple.png"
        );
      return message.channel.send(embed);
      console.log(Error);
    });
};
