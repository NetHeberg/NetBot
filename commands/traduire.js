exports.run = async (client, message, args, command) => {
  const translate = require("@k3rn31p4nic/google-translate-api");
  var Discord = require("discord.js");

  const ISO6391 = require("iso-639-1");

  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
    );
  if (!args[0])
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : La langue d'origine est automatique mais vous devez indiquer la langue de destination"
    );
  if (args[0].length > 2)
    return message.channel.send(
      "<a:arminerror:617366968554618943> ERREUR : La commande ne prend en charge que les codes iso-639-1 c'est à dire des codes de 2 lettres"
    );

  translate(args.join(" ").slice(2), { to: args[0] })
    .then((res) => {
      var from = ISO6391.getName(args[0]);
      var to = ISO6391.getName(res.from.language.iso);
      var trad = new Discord.MessageEmbed()
        .setTitle("Traduction")
        .setDescription(
          "Powered by [Google Translate](https://translate.google.com/)"
        )
        .addField(
          "Texte d'origine : " +
            res.from.language.iso +
            "-" +
            to +
            " (automatique)",
          args.join(" ").slice(2)
        )
        .addField("Traduction : " + args[0] + "-" + from, res.text)
        .setThumbnail(
          "https://icerotsotv.github.io/arix/ressources/translate.gif"
        )
        .setColor("RANDOM")
        .setFooter("netheberg.fr");
      message.channel.send(trad);
    })
    .catch((err) => {
      var erreur = new Discord.MessageEmbed()
        .setTitle("Erreur")
        .setDescription(
          "**" +
            args[0] +
            "** n'est pas une langue prise en charge par la commande \n[voir les langues prises en charge](https://www.david-groult.fr/liste-des-codes-iso-639-1-par-language/)"
        )
        .setColor("RED")
        .setFooter("netheberg.fr");
      message.channel.send(erreur);
      console.log(err);
    });
};
