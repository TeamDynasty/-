const Discord = require('discord.js');

const client = new Discord.Client();

var prfix = "$";


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
        .addField("$kick", "Kick member")
        .addField("$ban", "Ban member")
        .setFooter("End of the list")
        message.channel.sendMessage(help_embed);
        console.log("Commands")
    }





client.on('message', message => {
    let command = message.content.splice(" ")[0]
    const args = message.content.splice(prfix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {

        let modRole = message.guild.roles.find("name", "test");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("You don't have the rights to do that").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Choose a member to kick").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("This user doesn't exist")
        }
        if(!message.guild.member(btoa.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("I don't have the rights to do that").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} has been kicked`).catch(console.error);
            message.guild.channel.find("name", "General").send(`**${member.user.username} has been kicked by **${message.author.username}**`)
        }).catch(console.error)
    }})

});
