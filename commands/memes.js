const Discord = require("discord.js");
const meme = require('memejs');

exports.run = async (bot, message, args) => {
  let searchMessage = await message.channel.send('seraching...');
  meme(function(data) {
    const embed = new Discord.RichEmbed()
      .setTitle(data.title[0])
      .setColor("#36393F")
      .setImage(data.url[0])
    searchMessage.edit(embed);
  })
}
module.exports.help = {
  name: "memes"
}
