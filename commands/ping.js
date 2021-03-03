exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const axios = require("axios")
    if(!args[0])return message.reply("vous ne m'avez pas donné d'ip à ping.")
    if(args[0].includes(":"))return message.reply("je ne supporte malheureusement pas encore le ping d'un port.")
    const embed = new Discord.MessageEmbed()
      .setTitle("Console de ping")
      .setDescription("<a:loading:756916814121926759> Chargement de votre requête")
      .setColor("2f3136")
      .setFooter("netheberg.fr");
      message.channel.send(embed).then(m =>{
       axios
        .get("https://api03.thehostingbot.xyz/"+args[0])
        .then((response) => {
          var data = response.data
          if(!data.pingInfo.error){
            embed.setDescription("```"+data.pingInfo.output+"```")
            embed.addField("• __Résumé__ :",`• ping : ${data.pingInfo.time}ms\n• IP : ${data.pingInfo.numeric_host}`)
            embed.setColor("GREEN")
            m.edit(embed)
            }else{
            embed.setDescription("Impossible de ping votre serveur.")
            embed.setColor("RED")
            m.edit(embed)
            }  
          
        
        })
      })
  
};
