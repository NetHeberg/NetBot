exports.run = (client, message, args) => {
  const axios = require("axios");

  axios
    .get("https://api.net-bot.tk/staff/permissions.json")
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          "Seul un membre du personnel de NetHeberg peut faire cette action."
        );
      if (response.data[message.author.id].permissions < 4)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );
      if (!args || args.length < 1) return message.reply("pas de nom fourni");
      const commandName = args[0];
      if (!client.commands.has(commandName)) {
        return message.reply("La commande n'existe pas");
      }
      delete require.cache[require.resolve(`./${commandName}.js`)];
      client.commands.delete(commandName);
      const props = require(`./${commandName}.js`);
      client.commands.set(commandName, props);
      message.reply(`commande ${commandName} rechargée`);
    });
};
