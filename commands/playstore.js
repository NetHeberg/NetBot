exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  var gplay = require("google-play-scraper");
  let recherche = args.join(" ");
  if (!recherche) return message.reply("vous n'avez demandé aucune recherche.");
  var attente = new Discord.MessageEmbed()
    .setDescription(
      "<a:loading:756916814121926759> Je traite votre demande, un instant s'il vous plaît."
    )
    .setColor("2f3136");

  message.channel.send(attente).then((m) => {
    gplay
      .search({
        term: args,
        num: 1,
      })
      .then((obj) => {
        gplay.app({ appId: obj[0].appId, lang: "fr" }).then(
          (App) => {
            m.edit(
              new Discord.MessageEmbed()
                .setDescription(
                  "**Nom : **" +
                    App.title +
                    "\n **Développeur : **" +
                    App.developer +
                    "\n **Version : **" +
                    App.version +
                    "\n **Description : **" +
                    App.description +
                    "\n **Installations : **" +
                    App.installs +
                    "\n **Score : **" +
                    App.score +
                    "\n **Taille : **" +
                    App.size
                )
                .setColor("2f3136")
            );
          },
          () => {
            m.edit(
              new Discord.MessageEmbed()
                .setDescription(args + " Application non trouvée")
                .setColor("2f3136")
            );
          }
        );
      });
  });
};
