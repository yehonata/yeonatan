module.exports = client => {
  console.log(
    `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds. Logged in with ${client.user.tag} With ID: ${client.user.id}`
  );
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".

  client.user.setActivity(`!help :לעזרה`);
  //);
};
