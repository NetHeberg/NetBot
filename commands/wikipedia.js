exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  const { default: wiki } = require("wikijs");
  let recherche = args.join(" ");
  if (!recherche) return message.reply("vous n'avez demandé aucune recherche.");
  var attente = new Discord.MessageEmbed()
    .setDescription("Recherche en cours <a:loading:756916814121926759>")
    .setColor("2f3136");
  message.channel.send(attente).then((m) => {
    wiki({ apiUrl: "https://fr.wikipedia.org/w/api.php" })
      .page(recherche)
      .then((page) => page.summary())
      .then(function (result) {
        let cut = result.split("\n");
        if (cut[0].includes("peut désigner :")) {
          var embedL = new Discord.MessageEmbed()
            .setTitle("Echec de la recherche Wikipédia")
            .setDescription(
              "Votre recherche est imprécise, veuillez la reformuler."
            )
            .setColor("RED")
            .setFooter("résultat pour " + message.author.username);
          return m.edit(embedL);
        } else {
          var description = cut[0];
        }

        wiki({ apiUrl: "https://fr.wikipedia.org/w/api.php" })
          .page(recherche)
          .then((page) => page)
          .then(function (result) {
            const titre = result.raw.title;
            const URL = result.raw.fullurl;
            const EURL = result.raw.editurl;

            wiki({ apiUrl: "https://fr.wikipedia.org/w/api.php" })
              .page(recherche)
              .then((page) => page.images())
              .then(function (result) {
                var msg = new Discord.MessageEmbed()
                  .setTitle(titre)
                  .setDescription("```" + description + "```")
                  .setColor("#fcfcfc")
                  .addField(
                    "Liens :",
                    "• [Vers L'article](" +
                      URL +
                      ")\n• [Vers la modification](" +
                      EURL +
                      ")"
                  )
                  .setThumbnail(
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wikipedia_logo_%28svg%29.svg/1250px-Wikipedia_logo_%28svg%29.svg.png"
                  );
                if (result[0].includes(".png") || result[0].includes(".jpg")) {
                  var image = result[0];
                  msg.setImage(image);
                }

                m.edit(msg);
              })
              .catch((error) => {
                var embedL = new Discord.MessageEmbed()
                  .setTitle("Echec de la recherche Wikipédia")
                  .setDescription(
                    "Impossible de trouver un article correspondant à la demande de recherche."
                  )
                  .setColor("RED")
                  .setFooter("résultat pour " + message.author.username);
                m.edit(embedL);
              });
          })
          .catch((error) => {
            var embedL = new Discord.MessageEmbed()
              .setTitle("Echec de la recherche Wikipédia")
              .setDescription(
                "Impossible de trouver un article correspondant à la demande de recherche."
              )
              .setColor("RED")
              .setFooter("résultat pour " + message.author.username);
            m.edit(embedL);
          });
      })
      .catch((error) => {
        var embedL = new Discord.MessageEmbed()
          .setTitle("Echec de la recherche Wikipédia")
          .setDescription(
            "Impossible de trouver un article correspondant à la demande de recherche."
          )
          .setColor("RED")
          .setFooter("résultat pour " + message.author.username);
        m.edit(embedL);
      });
  });
};
