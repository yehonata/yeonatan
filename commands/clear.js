exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  message.delete()
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 2 || deleteCount > 500)
    return message.reply("**Please provide a number between 2 and 500 for the number of messages to delete**");
  const fetched = await message.channel.fetchMessages({ limit: deleteCount });
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`**Couldn't delete messages because of: ${error}**`));
}