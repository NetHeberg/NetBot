exports.run = (client, message, args) => {
  var Discord = require("discord.js");

  var idinfo = new Discord.MessageEmbed()
    .setDescription("C'est clair " + message.member.displayName)
    .setImage(
      "https://api-netbot.nhx.fr/DossierTopSecretANouvrirSousAucunPretexte/SerieuxArretesToiLa/VadeRetroSatana/LesBelgesLesBests/AllezStopMtn/BonSiTuInsistes/tenor.gif"
    )
    .setColor("2f3136")
    .setFooter("Cette commande est un easter-egg, essaye de la trouver");
  message.delete();
  message.channel.send(idinfo);
};
