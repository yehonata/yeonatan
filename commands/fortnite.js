//put line 1 in the top of your code
exports.run = async (client, message, args) => {
  const fortnite = require('fortnite.js');
  const Discord = require('discord.js')
  //put the rest of the code in your command handler or message event.
  let username = args.join(" ");
  if (!username) {
    message.channel.send("No username found");
  } else {
    const client = new fortnite('21994624-c2e3-4b74-860e-e9f7c288d8e8');
    var finalA = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    client.get(username, fortnite.PC)
      .then(stats => {
        let embed = new Discord.RichEmbed()
          .setTitle("Stats Check for: " + stats.displayName)
          .setColor('#66ff66')
          .addField("Kills", stats.stats.kills)
          .addField("Matches played", stats.stats.matches)
          .addField("K.D", stats.stats.kd)
          .addField("Win Percent", stats.stats.winPercent)
          .addField("Score", stats.stats.score)
          .addField("Wins", stats.stats.top1);
        message.channel.send(embed);
      })
      .catch((err) => {
        message.channel.send("user not found");
      });
  }
}