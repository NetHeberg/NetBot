const { Client, Message, MessageEmbed } = require('discord.js');

/**
 *
 * @param {Client} client
 * @param {Message} message
 * @param {Array<String|Number|Boolean>} args
 */

exports.run = async (client, message, args) => {
  const axios = require('axios');

  axios
    .get('https://api.net-bot.tk/staff/permissions.json')
    .then((response) => {
      if (!response.data[message.author.id])
        return message.reply(
          'Seul un membre du personnel de NetHeberg peut faire cette action.'
        );
      if (response.data[message.author.id].permissions < 3)
        return message.reply(
          "vous n'avez pas le niveau de permissions requis afin de faire cette action."
        );

      // Check for input
      if (!args[0])
        return message.channel.send(':x: ERREUR : Aucun temps fourni');
      if (isNaN(args[0]) == true)
        return message.reply(args[0] + " n'est pas un nombre valide");
      if (args[0].includes('.'))
        return message.reply('Seuls les nombres entiers sont acceptés');
      if (args[0] > 3600)
        return message.reply('Le cooldown maximum est de 3600s (1 heure)');
      // Create Embed
      const embed = new MessageEmbed()
        .setColor('RED')
        .setDescription(
          '__**Temps**__ : ' +
            args[0] +
            's\n__**Modérateur**__ : ' +
            '<@!' +
            message.author +
            '>'
        )
        .setTitle(`Ce salon est maintenant en slooooooooow mode :turtle:️`);

      if (args[0] === '0') {
        const embed = new MessageEmbed()
          .setColor('GREEN')
          .setTitle(`Slowmode terminé, bon tchat! :person_running:️`);
        message.channel
          .send(embed)
          .then(async (msg) => {
            message.channel.setRateLimitPerUser(args[0]);
            message.delete({ timeout: 1000 });
          })
          .catch((error) => {
            throw console.log(error);
          });
      } else {
        message.channel
          .send(embed)
          .then(async (msg) => {
            message.channel.setRateLimitPerUser(args[0]);
            message.delete({ timeout: 1000 });
          })
          .catch((error) => {
            throw console.log(error);
          });
      }
    });
};
