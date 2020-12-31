let scan = new Set();
module.exports = async (client, message) => {
  const Discord = require("discord.js");
  if (message.author.bot) return;
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.channel.id == "747780287651643462") {
    var user = new Discord.MessageEmbed()
      .setTitle("Votre question à bien été envoyée")
      .setDescription(
        "Un autre question ? Envoyez la dans 6h sur le même salon :smile:"
      )
      .setThumbnail(
        "https://images.netheberg.fr/i/Ip4WdnDacmuzhr2qSvBfE89NRyoke1Qj5Yi7GAsUTXgbMFVZwKPC3OlHxtLJ.png"
      )
      .setColor("2f3136")
      .setFooter("netheberg.fr");
    var server = new Discord.MessageEmbed()
      .setTitle("Nouvelle question !")
      .setDescription("```" + message.content + "```")
      .addField(
        "Utilisateur ",
        "<@!" +
          message.author +
          ">\nUsername : " +
          message.author.username +
          "\nID : " +
          message.author
      )
      .setThumbnail(
        "https://images.netheberg.fr/i/Ip4WdnDacmuzhr2qSvBfE89NRyoke1Qj5Yi7GAsUTXgbMFVZwKPC3OlHxtLJ.png"
      )
      .setColor("2f3136")
      .setFooter("netheberg.fr");
    let msg = await client.channels.cache
      .get("747781985413496833")
      .send(server)
      .then(async function (msg) {
        await msg.react("✅");
        await msg.react("❌");
        await message.author.send(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (message.channel.id === "741392757884452865") {
    var absence = new Discord.MessageEmbed()
      .setTitle(message.member.displayName)
      .setDescription(message.content)
      .setFooter("merci d'avoir signalé votre absence au staff de NetHeberg :)")
      .setColor("2f3136")
      .setThumbnail(message.author.avatarURL());
    message.delete();
    return message.channel.send(absence);
  }
  if (message.channel.id === "790656626528747541") {
    if (message.content.length < 200) {
      console.log(message.content.length);
      message.delete();
    }
  }

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  if (command == "scan") {
    if (!message.member.displayName.startsWith("NH |")) {
      if (!args[0]) return message.reply("vous devez spécifier une url");
      if (!args[0].startsWith("http") && !args[0].startsWith("https"))
        return message.reply("Ceci n'est pas une URL valide");
      if (scan.has(message.author.id)) {
        return message.reply(
          "Afin de ne pas surcharger notre api, un seul scan est disponible toutes les 5 minutes"
        );
      }
      scan.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 300000);
    }
  }

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
