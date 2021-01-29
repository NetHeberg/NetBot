exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const axios = require("axios");
  if (!args[0])
    return message.reply("vous ne m'avez pas donné de recherche à faire.");
  axios
    .get("https://djsdocs.sorta.moe/v2/embed?src=stable&q=" + args.join("+"))
    .then((response) => {
      if (response.data !== null) {
        var embed = new Discord.MessageEmbed()
          .setTitle("Documentation pour " + args.join(" "))
          .setDescription(response.data.description)
          .setColor("#2296f3")
          .setFooter("netheberg.fr")
          .setThumbnail("https://discord.js.org/static/logo-square.png");
        message.channel.send(embed);
      } else {
        message.channel.send(
          "Je n'ai rien trouvé pour `" + args.join(" ") + "`"
        );
      }
    })
    .catch((error) => {
      message.channel.send(
        "Oops, quelque chose s'est mal passé. Réessayez plus tard."
      );
    });
};
