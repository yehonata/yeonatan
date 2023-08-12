module.exports = {
  name: 'unban',
  description: 'Tag a member and unban them.',
  args: true,
  guildOnly: true,
  execute(message, args) {
    const staff = message.author
    const member = message.author
    const guild = message.guild
    const user = message.mentions.users.first();
    let perms = message.member.permissions;

    // Check if a member has a specific permission on the guild!
    let has_kick = message.member.hasPermission("BAN_MEMBERS");
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to ban them!');
    } else if (!has_kick) {
      return message.reply('you do not have permission to ban users!');
    } else if (perms = has_kick) {
      let reason = args.slice(1).join(' ');
      user.send(`You were banned by ${staff} for: ${reason}`);
      guild.unban(user);
    }
  },
};
