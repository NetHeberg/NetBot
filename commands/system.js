const Discord = require("discord.js");

const { version } = require("discord.js");

let os = require("os");
let cpuStat = require("cpu-stat");
const ms = require("ms");
const fs = require("fs");
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return message.channel.send(
      ":x: ERREUR : il me manque la permission ``Intégrer des liens`` pour utiliser l'ensemble de mes commandes (sinon elles ne savent pas d'afficher)"
    );
  console.log(os);
  var lancement = new Discord.MessageEmbed()
    .setDescription(
      "<a:loading:756916814121926759> Je traite votre demande, un instant s'il vous plaît."
    )
    .setColor("2f3136");
  message.channel.send(lancement).then((m) => {
    fs.readdir("./commands", (error, files) => {
      const FastSpeedtest = require("fast-speedtest-api");

      let speedtest = new FastSpeedtest({
        token: "/",
        verbose: false,
        timeout: 10000,
        https: true,
        urlCount: 5,
        bufferSize: 8,
        unit: FastSpeedtest.UNITS.Mbps,
      });
      let cpuLol;
      cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
        speedtest
          .getSpeed()
          .then((s) => {
            const embedStats = new Discord.MessageEmbed()
              .setTitle("__**Informations système**__")
              .setColor("BLACK")
              .addField(
                ":desktop: **Serveur**",
                "• CPU : ``" +
                  os.cpus().map((i) => `${i.model}`)[0] +
                  "``\n" +
                  "• Arch : ``" +
                  os.arch() +
                  "``\n" +
                  "• OS : ``" +
                  os.platform() +
                  " (Debian 8)``\n" +
                  "• Discord.js : " +
                  "v" +
                  version +
                  "\n" +
                  "• NodeJS : " +
                  process.version+
                  "\n" +
                  "• Ping : " +
                  Math.round(client.ws.ping) +
                  "ms"
              )
              .addField(
                ":minidisc: **Ressources**",
                "• Memoire : " +
                  (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
                  "/" +
                  (os.totalmem() / 1024 / 1024).toFixed(2) +
                  " MB\n" +
                  "• Utilisation CPU : " +
                  `\`${percent.toFixed(2)}%\`` +
                  "\n• Vitesse de téléchargement : " +
                  Math.round(s) +
                  " mb/s"
              )
              .addField(
                ":man_technologist: **Responsable du développement**",
                "<@!495874584650842123>"
              );

            m.edit(embedStats);
          })
          .catch((e) => {
            console.error(e.message);
          });
      });
    });
  });
};
