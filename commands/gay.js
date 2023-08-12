const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  let gay = Math.round(Math.random() * 100);
  let r = message.mentions.users.first() || message.author;

  let gayembed = new Discord.RichEmbed()
    .setColor("#f442d4")
    .setTitle(`${r.username} is ${gay}% gay!`);
  message.delete(10);
  return message.channel.send(gayembed);
};

exports.conf = {
  aliases: [`gay`]
};

exports.help = {
  name: "gay",
};
