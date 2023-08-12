const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("Adminisrator")) {
    return message.channel.send(new Discord.RichEmbed()
      .setDescription("You lack the **`Administrator`** permission.")
      .setColor("RED")
    );
  }


  if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send("you cant do this out of ticket channels")

  message.channel.delete()

  let c = await db.fetch(`case_${message.guild.id}`)
  if (c == null) c = 0

  let ticket = await db.fetch(`ticket_${message.guild.id}_${message.channel.topic}`)
  if (ticket == null) return;
  if (ticket.creator == null) return;
  if (ticket.id == null) return;
  if (ticket.subject == null) return;

  let member = bot.users.get(ticket.creator)

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} ${message.author.tag} closed your ticket [${ticket.name}]`)
    .setColor("#36393F")
    .setDescription(`

  **__Ticket closed by:__** ${message.author.tag}.

  If you feel like you didn't get the help/information that you need feel free to open a new one!
   `)
    .setFooter(`${ticket.subject}`)

  member.sendMessage(embed)

  db.delete(`ticket_${message.guild.id}_${message.channel.topic}`)
}