exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  let wUser = message.mentions.users.first() || message.author; //message.guild.members.get(args[0]));
  if (!wUser) return message.channel.send("**Please mention a valid member of this server**");
  var argsb = message.content.substring(10).split(' ');
  message.delete();
  argsb.shift()
  let msg = argsb.join(' ')
  if (!msg) return;
  message.channel.createWebhook(wUser.username, wUser.avatarURL)//|| message.author.username, message.author.avatarURL) 
    .then(wb => {
      const user = new Discord.WebhookClient(wb.id, wb.token) //get the webhook
      user.send(msg);
      user.delete()
    })
    .catch(console.error)

}