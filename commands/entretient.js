exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  if (message.author.id !== "495874584650842123") return;
  let heure = "Le " + args[1] + " à " + args[2];
  const embed1 = new MessageEmbed()
    .setDescription(
      "Bonjour bonjour, c'est votre ami NetBot, Je vous informe que votre candidature à été retenue et passe au niveau suppérieur ! Toutes mes félicitations !\n\n__**Heure proposée par le membre du personnel :** __" +
        heure +
        " (Heure de France)\nCela est impossible ? Contactez Jean en message privé ou sur le Discord de NetHeberg\n\n"
    )
    .setColor("2f3136")
    .setThumbnail(
      "https://api-netbot.nhx.fr/assets/images/logo.png"
    )
    .setFooter(
      "--------------------------------\nNE REPONDEZ PAS SOUS CETTE LIGNE"
    );
  const embed2 = new MessageEmbed()
    .setTitle("Nouvelle date d'entretient vocal.")
    .setDescription(
      " Qui ? : <@!" +
        args[0] +
        ">\nQuand ? : " +
        heure +
        "\n\n **Vous souhaitez participer à cet entretient ? Réagissez avec la réaction.**"
    )
    .setThumbnail(client.users.cache.get(args[0]).avatarURL())
    .setColor("2f3136");
  client.channels.cache
    .get("758747694213627924")
    .send(embed2)
    .then(function (message) {
      message.react("✅");
    })
    .catch(function () {});
  client.users.cache.get(args[0]).send(embed1);
  message.channel.send("Message d'entretient envoyé avec succès");
};
