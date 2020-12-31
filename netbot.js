const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
console.log(
  " ▐ ▄ ▄▄▄ .▄▄▄▄▄▄▄▄▄·       ▄▄▄▄▄    ▄▄▄▄·  ▄· ▄▌    ▪   ▄▄· ▄▄▄ .▄▄▄        \n" +
    "•█▌▐█▀▄.▀·•██  ▐█ ▀█▪▪     •██      ▐█ ▀█▪▐█▪██▌    ██ ▐█ ▌▪▀▄.▀·▀▄ █·▪     \n" +
    "▐█▐▐▌▐▀▀▪▄ ▐█.▪▐█▀▀█▄ ▄█▀▄  ▐█.▪    ▐█▀▀█▄▐█▌▐█▪    ▐█·██ ▄▄▐▀▀▪▄▐▀▀▄  ▄█▀▄ \n" +
    "██▐█▌▐█▄▄▌ ▐█▌·██▄▪▐█▐█▌.▐▌ ▐█▌·    ██▄▪▐█ ▐█▀·.    ▐█▌▐███▌▐█▄▄▌▐█•█▌▐█▌.▐▌\n" +
    "▀▀ █▪ ▀▀▀  ▀▀▀ ·▀▀▀▀  ▀█▄▀▪ ▀▀▀     ·▀▀▀▀   ▀ •     ▀▀▀·▀▀▀  ▀▀▀ .▀  ▀ ▀█▄▀▪"
);
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Chargement de la commande ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("message", async (message) => {
  var staff = require("./commands/staff.json");
  var auth = staff.faq;
  if (!auth.includes(message.author.id)) return;
  let sping = require("./commands/sping.json");
  if (!sping[message.author.id]) {
    sping[message.author.id] = {
      content: "off",
      auto: "off",
      accepted: "no",
    };
  }

  //sping[message.author.id].content =  args.join(" ");

  fs.writeFile("./commands/sping.json", JSON.stringify(sping), (err) => {
    if (err) console.log(err);
  });
});

client.login(config.token);
