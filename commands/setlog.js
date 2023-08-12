const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args, tools) => {
  if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '453993569817067529') return message.reply("Sorry man, you can't do that you need permission `ADMINISTRATOR`");
  let CHANNEL = message.mentions.channels.first();
  console.log("hi");

  if (args[0] === `${CHANNEL}`) {
    db.set(`msgd_${message.guild.id}`, CHANNEL.id);

    message.channel.send(`i set the message delete channel to ${CHANNEL}`)
    console.log("hihi");

  }

  if (args[0] === "off") {
    db.delete(`msgd_${message.guild.id}`)
    message.channel.send(`i turn down the message delete channel`);
  }

}


