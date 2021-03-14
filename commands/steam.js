const Discord = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
    );

  let game = args[0];
  let steampng =
    "https://api-netbot.nhx.fr/assets/images/steam.png";
  if (!game)
    return message.reply(
      "<a:arminerror:617366968554618943> ERREUR : Veuillez spécifier un jeu"
    );
  message.channel
    .send("Je cherche le jeu : " + args.join(" ") + ", patientez un peu")
    .then((message) => message.delete(1500));
  provider.search(game).then((result) => {
    provider.detail(result[0].id, "france", "fr").then((results) => {
      console.log(results);
      if (results.otherData.metacriticScore === null) {
        var critique = "Aucune note actuellement";
      } else {
        var critique = results.otherData.metacriticScore + "/100";
      }
      const embed = new Discord.MessageEmbed()
        .setAuthor("Magasin Steam", steampng)
        .setColor("#36393F")
        .setTitle(result[0].name)
        .setThumbnail(results.otherData.imageUrl)
        .addField("Genre", results.genres)
        .addField(
          "Prix",
          `Prix Normal **${results.priceData.initialPrice}** €
Prix réduit **${results.priceData.finalPrice}** €`,
          true
        )
        .addField("Plateforme", results.otherData.platforms, true)
        .addField("Score des Utilisateurs", critique, true)
        .addField("Fonctionnalitées", results.otherData.features, true)
        .addField("Développeur", results.otherData.developer, true)
        .addField("Publié par", results.otherData.publisher)
        .setColor("#36393F")
        .setFooter("netheberg.fr | résultat pour " + message.author.username);
      message.channel.send(embed).catch((e) => {
        console.log(e);
        message.channel.send(
          "Le jeu `" + args.join(" ") + "n'a pas été trouvé"
        );
      });
    });
  });
};
