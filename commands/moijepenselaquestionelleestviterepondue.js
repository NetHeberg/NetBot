exports.run = (client, message, args) => {
  var Discord = require("discord.js");

  var idinfo = new Discord.MessageEmbed()
    .setDescription("C'est clair " + message.member.displayName)
    .setImage(
      "https://net-bot.tk/DossierTopSecretANouvrirSousAucunPretexte/SerieuxArretesToiLa/VadeRetroSatana/FirminTesPasRigolo/AllezStopMtn/BonSiTuInsistes/tenor.gif"
    )
    .setColor("2f3136")
    .setFooter("Cette commande est un easter-egg, essaye de la trouver");
  message.delete();
  message.channel.send(idinfo);
};
