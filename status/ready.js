module.exports = async (client) => {
  const Discord = require("discord.js");
  console.log("Status démarrés");
  const hello = client.channels.cache.get("743023394458566686");
  const ping = require("ping");
  let helloembed = new Discord.MessageEmbed()
    .setTitle("LOG DEV")
    .setColor("GREEN")
    .addField("Status Inst 2", "Démarrage effectué avec succès");
  hello.send(helloembed);
  const temps = 60000;
  const Hping = 300;
  const VHping = 900;
  const errorColor = "0xff0000";
  const okColor = "#05d848";
  const axios = require("axios");

  client.channels.cache
    .get("743146051078193182")
    .messages.fetch("752250136033231030")
    .then((m) => {
      setInterval(async () => {
        var embed = new Discord.MessageEmbed()
          .setTitle("Statuts des serveurs")
          .setDescription(
            "Les statuts sur cette page sont actualisés toutes les 60 secondes[.](https://net-bot.tk/easter-egg.mp4) Une version web est disponible [ici](https://status.netheberg.fr/)"
          )
          .setColor("2f3136")
          .setThumbnail(
            client.guilds.cache
              .get("663370560696221698")
              .iconURL({ dynamic: true, size: 512, format: "png" })
          )
          .setFooter("Dernière actualisation des données ")
          .setTimestamp();
        let error;

        axios
          .get("https://api.netheberg.fr/status&apikey=" + process.env.APIKEY)
          .then((response) => {
            if (response.data.ping.siteV > VHping) {
              var site =
                ":chart_with_downwards_trend: | Site Web (" +
                response.data.ping.siteV +
                "ms)";
            }
            if (response.data.ping.siteV > Hping) {
              var site =
                ":chart_with_downwards_trend: | Site Web (" +
                response.data.ping.siteV +
                "ms)";
            }
            if (response.data.siteV == "online") {
              var site =
                ":white_check_mark: | Site Web (" +
                response.data.ping.siteV +
                "ms) [[Visiter le site]](https://netheberg.fr)";
            }
            if (response.data.siteV == "offline") {
              var site = ":x: | Site Web";
            }
            if (response.data.siteV == "website_error") {
              var site =
                ":no_entry: | Site Web \n*" + response.data.message.siteV + "*";
            }
            if (response.data.siteV == "server_error") {
              var site =
                ":satellite: | Site Web \n*" +
                response.data.message.siteV +
                "*";
            }

            if (response.data.ping.manager > VHping) {
              var ma =
                ":chart_with_downwards_trend: | Espace Client (" +
                response.data.ping.manager +
                "ms)";
            }
            if (response.data.ping.manager > Hping) {
              var ma =
                ":chart_with_downwards_trend: | Espace Client (" +
                response.data.ping.manager +
                "ms)";
            }
            if (response.data.manager == "online") {
              var ma =
                ":white_check_mark: | Espace Client (" +
                response.data.ping.manager +
                "ms) [[Visiter le site]](https://manager.netheberg.fr)";
            }
            if (response.data.manager == "offline") {
              var ma = ":x: | Espace Client";
            }
            if (response.data.manager == "website_error") {
              var ma =
                ":no_entry: | Espace Client \n*" +
                response.data.message.manager +
                "*";
            }
            if (response.data.manager == "server_error") {
              var ma =
                ":satellite: | Espace Client \n*" +
                response.data.message.manager +
                "*";
            }

            if (response.data.ping.plesk1 > VHping) {
              var p1 =
                ":chart_with_downwards_trend: | Plesk (particulier) (" +
                response.data.ping.plesk1 +
                "ms)";
            }
            if (response.data.ping.plesk1 > Hping) {
              var p1 =
                ":chart_with_downwards_trend: | Plesk (particulier) (" +
                response.data.ping.plesk1 +
                "ms)";
            }
            if (response.data.plesk1 == "online") {
              var p1 =
                ":white_check_mark: | Plesk (particulier) (" +
                response.data.ping.plesk1 +
                "ms) [[Vers le panel]](https://monplesk.eu)";
            }
            if (response.data.plesk1 == "offline") {
              var p1 = ":x: | Plesk (particulier)";
            }

            if (response.data.ping.plesk2 > VHping) {
              var p2 =
                ":chart_with_downwards_trend: | Plesk (professionnel) (" +
                response.data.ping.plesk2 +
                "ms)";
            }
            if (response.data.ping.plesk2 > Hping) {
              var p2 =
                ":chart_with_downwards_trend: | Plesk (professionnel) (" +
                response.data.ping.plesk2 +
                "ms)";
            }
            if (response.data.plesk2 == "online") {
              var p2 =
                ":white_check_mark: | Plesk (professionnel) (" +
                response.data.ping.plesk2 +
                "ms) [[Vers le panel]](https://web01.holycloud.fr:8443)";
            }
            if (response.data.plesk2 == "offline") {
              var p2 = ":x: | Plesk (professionnel)";
            }

            if (response.data.ping.vps1 > VHping) {
              var v1 =
                ":chart_with_downwards_trend: | Serveur (" +
                response.data.ping.vps1 +
                "ms)";
            }
            if (response.data.ping.vps1 > Hping) {
              var v1 =
                ":chart_with_downwards_trend: | Serveur (" +
                response.data.ping.vps1 +
                "ms)";
            }
            if (response.data.vps1 == "online") {
              var v1 =
                ":white_check_mark: | Serveur (" +
                response.data.ping.vps1 +
                "ms)";
            }
            if (response.data.vps1 == "offline") {
              var v1 = ":x: | Serveur";
            }

            if (response.data.ping.panel > VHping) {
              var pa =
                ":chart_with_downwards_trend: | Panel (" +
                response.data.ping.panel +
                "ms)";
            }
            if (response.data.ping.panel > Hping) {
              var pa =
                ":chart_with_downwards_trend: | Panel (" +
                response.data.ping.panel +
                "ms)";
            }
            if (response.data.panel == "online") {
              var pa =
                ":white_check_mark: | Panel (" +
                response.data.ping.panel +
                "ms) [[Visiter le site]](https://panel.netheberg.fr)";
            }
            if (response.data.panel == "offline") {
              var pa = ":x: | Panel";
            }
            if (response.data.panel == "website_error") {
              var pa =
                ":no_entry: | Panel \n*" + response.data.message.panel + "*";
            }
            if (response.data.panel == "server_error") {
              var pa =
                ":satellite: | Panel \n*" + response.data.message.panel + "*";
            }

            if (response.data.ping.cpanel1 > VHping) {
              var cp1 =
                ":chart_with_downwards_trend: | CPanel (particulier) (" +
                response.data.ping.cpanel1 +
                "ms)";
            }
            if (response.data.ping.cpanel1 > Hping) {
              var cp1 =
                ":chart_with_downwards_trend: | CPanel (particulier) (" +
                response.data.ping.cpanel1 +
                "ms)";
            }
            if (response.data.cpanel1 == "online") {
              var cp1 =
                ":white_check_mark: | CPanel (particulier) (" +
                response.data.ping.cpanel1 +
                "ms) [[Vers le panel]](https://monpanel.info:2083)";
            }
            if (response.data.cpanel1 == "offline") {
              var cp1 = ":x: | CPanel (particulier)";
            }
            embed.addField("\u200b", "\u200b");
            embed.addField(
              "<:NetHeberg:742431416104779827> NetHeberg",
              site + "\n" + ma
            );
            embed.addField("\u200b", "\u200b");
            embed.addField("🌐 Univers Web", p1 + "\n" + p2 + "\n" + cp1);
            embed.addField("\u200b", "\u200b");
            embed.addField("🎮 Univers Game", v1 + "\n" + pa);
            m.edit(embed);
          })
          .catch((error) => {
            console.log(error);
            if (error) {
              var embedE = new Discord.MessageEmbed()
                .setTitle("Statuts des serveurs")
                .setDescription(
                  "Erreur avec la récupération des serveurs, nous travaillons actuellement sur ce problème.\n\nNous nous excusons pour la gène occasionnée."
                )
                .setColor("RED")
                .setThumbnail(
                  client.guilds.cache
                    .get("663370560696221698")
                    .iconURL({ dynamic: true, size: 512, format: "png" })
                );
              m.edit(embedE);
            }
          });
      }, temps);
    });
};
