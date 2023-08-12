module.exports = async (client, message, member, guild) => {
  const db = require("quick.db");
  if (message.author.bot) return;
  var prefix = '!';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = '!';
  else prefix = fetched;
  //console.log(prefix)
  const Discord = require("discord.js");
  let pf = await db.fetch(`level_${message.guild.id}_${message.author.id}`)
  if (pf === null || pf === 0 || pf === "undefined" || pf === "none") { pf = 0; }
  let l = message.content.length / 2
  var points = pf
  db.set(`level_${message.guild.id}_${message.author.id}`, points + l)

  //message.channel.send(points)
  if (!message.content.startsWith(prefix)) return;





  //if(!message.content.startsWith(prefix)) return;

  // Ignore messages not starting with the prefix (in config.json)
  //if (message.content.indexOf(prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args, guild);
};