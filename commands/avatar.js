exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  let request = await message.channel.send("Ready?!?!?!");
  message.delete();
  let taggedUser = message.mentions.users.first() || message.author;
  await message.channel.send({
    files: [
      {
        attachment: taggedUser.displayAvatarURL,
        name: "avatar.gif"
      }
    ]
  });
  message.delete();
}