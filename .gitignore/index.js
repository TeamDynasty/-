const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = "$";



bot.login("NDcxMDg3OTQ1OTM2NTM1NTgz.Djf5Gw.4nI-UObMYFGbndfCaO-2WCjq_hU");

bot.on("ready", () => {
    console.log("I'm online")
    client.user.setGame("$help");
});


bot.on('message', message => {
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Commands list : ")
        .addField("$help", "Show bot commands")
        .addField("$kick", "Kick member")
        .addField("$ban", "Ban member")
        .setFooter("End of the list")
        message.channel.sendMessage(help_embed);
        console.log("Commands")
    }


    switch (args[0],toLowerCase()){
        case "kick":
        
        if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
            message.reply("You don't have the rights")
        }else{
            var memberkick = message.mentions.members.firsts();
            console.log(memberkick)
            console.log(message.guild.member(memberkick).kickable)
            if(!memberkick){
                message.reply("User doesn't exist");
            }else{
                if(!message.guild.member(memberkick).kickable){
                    message.reply("You can't ban this user");
                }else{
                    message.guild.member(memberkick).kick().then((member) => {
                    message.channel.send(`${member.displayName} has been kicked`);
                }).catch(() => {
                    message.channel.send("Kick refused")
                })
            }
        }
    }
        break;

    }
});

