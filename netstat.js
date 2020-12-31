const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./status/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./status/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.login(config.token);
