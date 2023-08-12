exports.run = async(client, message, args) => {
  const db = require("quick.db");
    const Discord = require("discord.js");
    if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '453993569817067529') return message.channel.send('Sorry, you don\'t have permission to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));
if (!args.join(' ')) return message.channel.send('Please provide a prefix to change server prefix')
	.then(msg => msg.delete({
		timeout: 10000
	}));

db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
		message.channel.send(`Server Prefix has been changed to ${i}`);
	})
  
}