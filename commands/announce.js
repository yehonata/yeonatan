exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  const ac = message.guild.channels.find(channel => channel.id === '553986369807056896');
  if (!ac) return message.channel.send("**Please create a channel called '『🔔』annoucement**");
  const announceMessage = args.join(" ");
  if (!message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send("Sorry! You don't have permissions to do that!");
  message.delete().catch(O_o => { });
  if (!announceMessage) return message.channel.send("**Please enter what you want to announce**");
  ac.send("@everyone" + "\n" + announceMessage);

}
