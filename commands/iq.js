const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

  let simp = Math.round(Math.random() * 100);
  let r = message.mentions.users.first() || message.author

  let simpembed = new Discord.RichEmbed()
    .setColor("#f442d4")
    .setTitle(`${r.username} is ${simp}% iq!`);
  message.delete(10);
  return message.channel.send(simpembed);
};

exports.conf = {
  aliases: [`iq`]

}

exports.help = {
  name: "iq"

}