exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  var GitHubby = require("githubby");
  message.delete();
  if (!args[0])
    return message.reply(
      "vous ne m'avez pas donné de nom d'utilisateur GitHub :/"
    );
  GitHubby.getUser(args[0], (data) => {
    if (data.name == "") {
      var nom = args[0];
    } else {
      var nom = data.name;
    }
    console.log(data);
    let embed = new Discord.MessageEmbed()
      .setTitle(nom + " sur <:github:766744071917797386>")
      .setThumbnail(data.image)
      .setDescription(
        "\n[[Visiter le profile]](https://github.com/" + args[0] + ")"
      );
    if (data.worksFor !== "") {
      embed.addField("Travaille pour : ", data.worksFor);
    }
    if (data.homeLocation !== "") {
      embed.addField("Localisation : ", data.homeLocation);
    }
    if (data.website !== "") {
      embed.addField("Site Web : ", data.website);
    }
    message.channel.send(embed);
  });
};
