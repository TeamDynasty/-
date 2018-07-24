const Discord = require('discord.js');

const client = new Discord.Client();

var prfix = "$";
var randnum = 0


client.login("NDcxMDg3OTQ1OTM2NTM1NTgz.Djf5Gw.4nI-UObMYFGbndfCaO-2WCjq_hU");

client.on("ready", () => {
    console.log("I'm online")
    client.user.setGame("$help");
});

client.on('message', message => {
  
    
    if(message.content === prfix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Commands list : ")
        .addField("$help", "Show bot commands")
  
        .setFooter("End of the list")
        message.channel.sendMessage(help_embed);
        console.log("Commands")

    }





});

