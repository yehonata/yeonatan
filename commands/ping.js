exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  message.delete()
  const m = await message.channel.send("Ping:");
  m.edit(`** Latency: ${m.createdTimestamp - message.createdTimestamp}ms. API Latency: ${Math.round(client.ping)}ms**`);

}