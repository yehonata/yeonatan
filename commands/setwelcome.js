const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args, tools) => {
  if (!message.member.hasPermission("MANAGE_GUILD") && message.author.id !== '453993569817067529') return message.reply("Sorry man, you can't do that you need permission `MENAGE_SERVER`");
  let WCHANNEL = message.mentions.channels.first();
  console.log("hi");
  if (args[0] === `${WCHANNEL}`) {
    db.set(`msgw_${message.guild.id}`, WCHANNEL.id);

    message.channel.send(`i set the join and leave messages channel to ${WCHANNEL}`)
    console.log("hihi");

  }

  if (args[0] === "off") {
    db.delete(`msgw_${message.guild.id}`)
    message.channel.send(`i turn down the welcome and bye message channel channel`);
  }

}


