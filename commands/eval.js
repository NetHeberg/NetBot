exports.run = (client, message, args) => {
  var Discord = require("discord.js");

  if (message.author.id !== "416371373464748051")
    return message.channel.send(":x: ERREUR : Seul Firmin peut faire cela !");
  if (!args[0]) return message.channel.send(":x: ERREUR : Entrez du code svp");
  if (args.includes("token") || args.includes("client.token"))
    return message.reply(
      "cette action est trop dangereuse, je ne peux pas vous laisser faire ça"
    );
  try {
    let codein = args.join(" ");
    let code = eval(codein);

    if (typeof code !== "string")
      code = require("util").inspect(code, { depth: 0 });
    let embed = new Discord.MessageEmbed()
      .setAuthor("Evaluate")
      .setColor("RANDOM")
      .addField(":inbox_tray: Entrée", `\`\`\`js\n${codein}\`\`\``)
      .addField(":outbox_tray: Sortie", `\`\`\`js\n${code}\n\`\`\``)
      .setFooter("netheberg.fr");
    message.channel.send(embed);
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
  }
};
