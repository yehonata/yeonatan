const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args, tools) => {
  var prefix = '!';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = '!';
  else prefix = fetched;
  let bicon = client.user.displayAvatarURL;
  // command
  const embed = new Discord.RichEmbed()
    .setDescription("Commands")
    .setColor("#7FFF00")
    .setThumbnail(bicon)
    .addField("Bot Name:", client.user.username)
    .addField("Prefix:", `\`${prefix}\``)
    .addField("Commands:", "`ping` `fake` `new` `members` `avatar` `memes` `say` `met` `gay` `say` `serverinfo` `h` `helpme` `fortnite`")
    .addField("Staff Commands:", "`announce` `close` `kick` `ban` `mute` `unmute` `setprefix` `setlog` `setwelcome` `unban` `warn` `clear` `addrole`")
  message.channel.send(embed);



}