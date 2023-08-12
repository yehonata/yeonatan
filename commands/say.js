exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => { });
  message.channel.send(sayMessage);
}