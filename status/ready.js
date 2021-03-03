module.exports = async (client) => {
  const Discord = require("discord.js");
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "/",
    user: "/",
    password: "/",
    database: "/",
  });
  const temps3 = 300000;
  //const temps3 = 1000
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connecté à la base de données");
  });
  console.log("Status démarrés");
  const hello = client.channels.cache.get("743023394458566686");
  const ping = require("ping");
  let helloembed = new Discord.MessageEmbed()
    .setTitle("LOG DEV")
    .setColor("GREEN")
    .addField("Status Inst 2", "Démarrage effectué avec succès");
  hello.send(helloembed);
  const temps = 60000;
  //const temps = 120000;
  //const temps = 1000;
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
        /*var embed = new Discord.MessageEmbed()
          .setTitle("Statuts des serveurs")
          .setDescription("Nous faisons des modifications sur cette page, elle reviendra dans les plus brefs délais.\n\nMerci pour votre compréhension.")
          .setColor(okColor)
          .setThumbnail(client.guilds.cache.get("663370560696221698").iconURL({ dynamic: true, size: 512, format: "png"}))
          .setFooter("Dernière actualisation des données ")
          .setTimestamp();
          //m.edit(wait2)*/
        let error;
        let site;
        let manager;
        let cpanel01;
        let plesk01;
        let pleskPro;
        let vesta01;
        let rev01;
        let ptero01;
        let ptero02;
        let vps01;

        await axios
          .get("https://api03.netheberg.fr/netheberg.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                site =
                  ":white_check_mark: | Site Web (" +
                  data.pingInfo.time +
                  "ms) [[Visiter le site]](https://netheberg.fr)";
              } else {
                site =
                  ":chart_with_downwards_trend: | Site Web (" +
                  data.pingInfo.time +
                  "ms) [[Visiter le site]](https://netheberg.fr)";
              }
            } else {
              site =
                ":x: | Site Web `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/manager.netheberg.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                manager =
                  ":white_check_mark: | Espace Client (" +
                  data.pingInfo.time +
                  "ms) [[Visiter le site]](https://manager.netheberg.fr)";
              } else {
                manager =
                  ":chart_with_downwards_trend: | Espace Client (" +
                  data.pingInfo.time +
                  "ms) [[Visiter le site]](https://manager.netheberg.fr)";
              }
            } else {
              manager =
                ":x: | Espace Client `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        axios
          .get("https://api03.netheberg.fr/srv01.dediweb.eu")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                cpanel01 =
                  ":white_check_mark: | cPanel (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://srv01.dediweb.eu:2083)";
              } else {
                cpanel01 =
                  ":chart_with_downwards_trend: | cPanel (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://srv01.dediweb.eu:2083)";
              }
            } else {
              cpanel01 =
                ":x: | cPanel `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/myplesk.xyz")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                plesk01 =
                  ":white_check_mark: | MyPlesk (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://myplesk.xyz)";
              } else {
                plesk01 =
                  ":chart_with_downwards_trend: | MyPlesk (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://myplesk.xyz)";
              }
            } else {
              plesk01 =
                ":x: | MyPlesk `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/web01.holycloud.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                pleskPro =
                  ":white_check_mark: | PleskPro (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://web01.holycloud.fr)";
              } else {
                pleskPro =
                  ":chart_with_downwards_trend: | PleskPro (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://web01.holycloud.fr)";
              }
            } else {
              pleskPro =
                ":x: | PleskPro `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/web01.holycloud.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                vesta01 =
                  ":white_check_mark: | Vesta (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://monplesk.eu)";
              } else {
                vesta01 =
                  ":chart_with_downwards_trend: | Vesta (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://monplesk.eu)";
              }
            } else {
              vesta01 =
                ":x: | Vesta `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/rev.netheberg.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                rev01 =
                  ":white_check_mark: | Revendeur Plesk (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://rev.netheberg.fr)";
              } else {
                rev01 =
                  ":chart_with_downwards_trend: | Revendeur Plesk (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://rev.netheberg.fr)";
              }
            } else {
              rev01 =
                ":x: | Revendeur Plesk `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/panel.netheberg.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                ptero01 =
                  ":white_check_mark: | panel01 (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://panel.netheberg.fr)";
              } else {
                ptero01 =
                  ":chart_with_downwards_trend: | panel01 (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://panel.netheberg.fr)";
              }
            } else {
              ptero01 =
                ":x: | panel01 `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/panel02.netheberg.fr")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 200) {
              if (data.pingInfo.time < 250) {
                ptero02 =
                  ":white_check_mark: | panel02 (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://panel02.netheberg.fr)";
              } else {
                ptero02 =
                  ":chart_with_downwards_trend: | panel02 (" +
                  data.pingInfo.time +
                  "ms) [[Vers le panel]](https://panel02.netheberg.fr)";
              }
            } else {
              ptero02 =
                ":x: | panel02 `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        await axios
          .get("https://api03.netheberg.fr/51.210.83.97")
          .then((response) => {
            var data = response.data;
            if (data.statusInfo.statusCode == 404) {
              if (data.pingInfo.time < 250) {
                vps01 =
                  ":white_check_mark: | Serveurs VPS (" +
                  data.pingInfo.time +
                  "ms)";
              } else {
                vps01 =
                  ":chart_with_downwards_trend: | Serveurs VPS (" +
                  data.pingInfo.time +
                  "ms)";
              }
            } else {
              vps01 =
                ":x: | Serveurs VPS `" +
                `${data.statusInfo.statusCode} - ${data.statusInfo.error}` +
                "`";
            }
          });

        embed.addField("\u200b", "\u200b");
        embed.addField(
          "<:NetHeberg:742431416104779827> NetHeberg",
          site + "\n" + manager
        );
        embed.addField("\u200b", "\u200b");
        embed.addField(
          "🌐 Univers Web",
          cpanel01 +
            "\n" +
            plesk01 +
            "\n" +
            pleskPro +
            "\n" +
            rev01 +
            "\n" +
            vesta01
        );
        embed.addField("\u200b", "\u200b");
        embed.addField("🎮 Univers Game", ptero01 + "\n" + ptero02);
        embed.addField("\u200b", "\u200b");
        embed.addField("🖥️ Serveurs VPS", vps01);
        m.edit(embed);
      }, temps);
    });

  client.channels.cache
    .get("743146051078193182")
    .messages.fetch("805418327149117501")
    .then((m) => {
      setInterval(async () => {
        let pleskRes = [];
        let vps = [];
        let cPanelRes = [];
        let vestaHost = [];
        let pleskHost = [];
        let cPanelHost = [];
        let nodeJS = [];
        con.query("SELECT * FROM tblproducts", function (err, result, fields) {
          if (err) throw err;
          result.forEach(function (element) {
            if (element.hidden !== 1) {
              if (element.qty <= 0) {
                var sto = "<:outstock:805446314673831969>";
              } else {
                var sto = element.qty;
              }
              if (element.type == "reselleraccount") {
                if (element.servertype == "plesk") {
                  var cat = "Revendeur Plesk";
                  pleskRes.push({
                    name: element.name,
                    qty: sto,
                  });
                } else {
                  var cat = "Revendeur cPanel";
                  cPanelRes.push({
                    name: element.name,
                    qty: sto,
                  });
                }
              }
              if (element.type == "hostingaccount") {
                if (element.servertype == "plesk") {
                  var cat = "Hébergement web Plesk";
                  pleskHost.push({
                    name: element.name,
                    qty: sto,
                  });
                } else if (element.servertype == "cpanel") {
                  var cat = "Hébergement web cPanel";
                  cPanelHost.push({
                    name: element.name,
                    qty: sto,
                  });
                } else {
                  var cat = "Hébergement web VestaCP";
                  vestaHost.push({
                    name: element.name,
                    qty: sto,
                  });
                }
              }

              if (element.type == "server") {
                if (element.servertype == "virtualizor_cloud") {
                  var cat = "VPS";
                  vps.push({
                    name: element.name,
                    qty: sto,
                  });
                }
              }

              if (element.type == "other") {
                if (element.servertype == "pterodactyl") {
                  var cat = "NodeJS";
                  nodeJS.push({
                    name: element.name,
                    qty: sto,
                  });
                }
              }
            }
          });
          let pleskHostList = "";
          let cpanelHostList = "";
          let vestaHostList = "";
          let pleskResList = "";
          let vpsList = "";
          let nodeJSList = "";
          pleskHost.forEach(
            (element) =>
              (pleskHostList =
                pleskHostList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          cPanelHost.forEach(
            (element) =>
              (cpanelHostList =
                cpanelHostList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          vestaHost.forEach(
            (element) =>
              (vestaHostList =
                vestaHostList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          pleskRes.forEach(
            (element) =>
              (pleskResList =
                pleskResList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          vps.forEach(
            (element) =>
              (vpsList =
                vpsList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          nodeJS.forEach(
            (element) =>
              (nodeJSList =
                nodeJSList +
                element.name.split("(")[0] +
                " : " +
                element.qty +
                "\n")
          );
          var stocksEmbed = new Discord.MessageEmbed()
            .setTitle("Statuts des Stocks")
            .setDescription(
              "Les statuts sur cette page sont actualisés toutes les 5 minutes."
            )
            .setColor("2f3136")
            .setThumbnail(
              client.guilds.cache
                .get("663370560696221698")
                .iconURL({ dynamic: true, size: 512, format: "png" })
            )
            .setFooter("Dernière actualisation des données ")
            .setTimestamp();
          if (pleskHostList !== "") {
            stocksEmbed.addField(
              "🌐 Hébergement Web : \n",
              "<:plesk:805421635556868176> **| Plesk :**\n" + pleskHostList
            );
          }
          if (cpanelHostList !== "") {
            stocksEmbed.addField(
              "\u200b",
              "<:cpanel:805421771327012865> **| cPanel :**\n" + cpanelHostList
            );
          }
          if (vestaHostList !== "") {
            stocksEmbed.addField(
              "\u200b",
              "<:vestacp:805422277998936064> **| VestaCP :**\n" + vestaHostList
            );
          }
          if (pleskResList !== "") {
            stocksEmbed.addField(
              "\u200b",
              "🧑‍💼 **| Revendeurs Web Plesk **\n" + pleskResList
            );
          }
          if (nodeJSList !== "") {
            stocksEmbed.addField(
              "\u200b",
              "<:pterodactyl:816609120270155778> **| Pterodactyl **\n" +
                nodeJSList
            );
          }
          if (vpsList !== "") {
            stocksEmbed.addField(
              "\u200b",
              "<:vps:805422476783910913> **| VPS **\n" + vpsList
            );
          }
          m.edit(stocksEmbed);
        });
        //
      }, temps3);
    });
};
