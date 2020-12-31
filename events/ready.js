module.exports = (client) => {
  const Discord = require("discord.js");
  console.log(
    `Je suis connecté et prêt à servir ` +
      client.guilds.cache.size +
      " serveurs et " +
      client.users.cache.size +
      " utilisateurs"
  );
  const activities_list = [
    "Un problème ? => ticket",
    "netheberg.fr",
    "n!help",
    "❤ Merci pour votre confiance !",
  ];
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 10000);

  const hello = client.channels.cache.get("743023378209964103");
  let helloembed = new Discord.MessageEmbed()
    .setTitle("LOG DEV")
    .setColor("GREEN")
    .addField("Status Inst 1", "Démarrage effectué avec succès");
  hello.send(helloembed);
};
