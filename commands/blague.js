exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  var fetch = require("node-fetch");
  if (args[0] == "dev") {
    fetch("https://www.blagues-api.fr/api/type/dev/random", {
      headers: {
        Authorization: `Bearer API KEY`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        var embed = new Discord.MessageEmbed()
          .addField(data.joke, "||" + data.answer + "||")
          .setFooter("netheberg.fr")
          .setColor("2f3136");
        message.channel.send(embed);
      });
    return;
  }
  fetch(
    "https://www.blagues-api.fr/api/random?disallow=dark&disallow=limit&disallow=blondes&disallow=beauf",
    {
      headers: {
        Authorization: `Bearer APIKEY`,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      var embed = new Discord.MessageEmbed()
        .addField(data.joke, "||" + data.answer + "||")
        .setColor("2f3136")
        .setFooter("clique pour savoir la réponse");
      message.channel.send(embed);
    });
};
