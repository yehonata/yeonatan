// server.js
// where your node app starts

// init project
var express = require("express");
var express = require("express");

var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pear-clam.glitch.me/`);
}, 6000);

// init sqlite db
var fs = require("fs");
// var dbFile = './.data/sqlite.db';
// var exists = fs.existsSync(dbFile);
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(dbFile);
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const ms = require("ms");
let mlogs;
let rlogs;
let wlogs;
const db = require("quick.db");

client.on("message", async (message) => {
  if (
    message.author.id === "436212260587831316" &&
    message.channel.id === "553997438562729991"
  ) {
    message.channel.send(`נשמח אם תשימו את הקוד של שי בחנות “shai״
If you can pls write “shai” on Support A Creator`);
  }
});

client.on("messageDelete", async (message) => {
  console.log("hihihi");
  if (message.channel.id === "1138087866468139030") return;
  if (message.channel.id === "1138087866468139030") return;
  const logc = await db.fetch(`msgd_${message.guild.id}`);
  if (logc === null) return;
  if (logc === "none") return;
  let CHANNEL = message.guild.channels.find((c) => c.id === logc);

  let logs = new Discord.RichEmbed()

    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("#ff0000")
    .setDescription("Message Deleted!")
    .addField("Message Sent By:", message.author, true)
    .addField("Deleted Message:", message.content, true)
    .addField("Channel:", message.channel, true)
    .setTimestamp();
  CHANNEL.send(logs);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  let mulogs = oldMessage.guild.channels.find(
    (channel) => channel.name === "（🔭）logs"
  );
  // if(!mulogs) {
  //   mulogs = oldMessage.guild.channels.find(channel => channel.name === "certified-hell");
  //   if(!mulogs) return;
  // }
  //}
  if (oldMessage.channel.id === "1138087866468139030") return;
  if (oldMessage.channel.id === "1138087866468139030") return;
  const logc = await db.fetch(`msgd_${oldMessage.guild.id}`);
  if (logc === null) return;
  if (logc === "none") return;
  let CHANNEL = oldMessage.guild.channels.find((c) => c.id === logc);

  if (oldMessage.content === newMessage.content) return;
  if (oldMessage.channel.id === "1138087866468139030") return;
  let editembed = new Discord.RichEmbed()
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("#15f153")
    .setDescription("Message Edited")
    .addField("Message author", `${oldMessage.author}`)
    .addField("Before Editing:", oldMessage.content, true)
    .addField("After Editing:", newMessage.content, true)
    .addField("Channel:", oldMessage.channel, true)
    .setTimestamp();
  CHANNEL.sendEmbed(editembed);
  return;
});

client.on("guildMemberAdd", async (member) => {
  const guild = member.guild;
  const uri = client.users.get("1138087863343399056");
  client.user.setActivity(
    `on ${client.guilds
      .get("1138087863343399056")
      .members.filter((m) => !m.user.bot).size
    } **__Wlcome To Nitay Place__** | Made By ${uri.tag}`,
    { type: "WATCHING" }
  );
  wlogs = guild.channels.find((channel) => channel.name === "✋-welcome-✋");
  if (!wlogs) {
    let channel = guild.channels.find(
      (channel) => channel.name === "✋-welcome-✋"
    );
    if (!channel) {
      channel = guild.channels.find(
        (channel) => channel.name === "certified-hell"
      );
      if (!channel) return;
    }
  }
  const logc = await db.fetch(`msgw_${member.guild.id}`);
  if (logc === null) return;
  if (logc === "none") return;
  let WCHANNEL = member.guild.channels.find((c) => c.id === logc);

  let welcomeembed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
    .setColor("#680bad")
    .setDescription(`👋 ${member.user.tag} Joined!👋`)
    .addField("Member", `${member.user}`)
    .addField("Current Membercount:", `${member.guild.memberCount} members!`)
    .setThumbnail(`<${member.user.avatarURL}>`)
    .setTimestamp();

  WCHANNEL.sendEmbed(welcomeembed);
  let memberrole = guild.roles.find((n) => n.id === "592955075274473494");
  if (!memberrole) return;
  await member.addRole(memberrole.id);
});

client.on("guildMemberRemove", async (member) => {
  const guild = member.guild;
  const idan = client.users.get("739534545291968633");
  client.user.setActivity(
    `to ${client.guilds.get("739534545291968633").members.filter((m) => !m.user.bot)
      .size
    } **__Leve In Nitay Place__** | Made By ${idan.tag}`,
    { type: "WATCHING" }
  );
  wlogs = guild.channels.find((channel) => channel.name === "✋-welcome-✋");
  if (!wlogs) {
    let channel = guild.channels.find(
      (channel) => channel.name === "✋-welcome-✋"
    );
    if (!channel) {
      channel = guild.channels.find(
        (channel) => channel.name === "certified-hell"
      );
      if (!channel) return;
    }
  }
  const logc = await db.fetch(`msgw_${member.guild.id}`);
  if (logc === null) return;
  if (logc === "none") return;
  let WCHANNEL = member.guild.channels.find((c) => c.id === logc);

  let byeembed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
    .setColor("#ff0000")
    .setDescription(`😢 ${member.user.tag} Left!😢`)
    .addField("Member", `${member.user}`)
    .addField("Current Membercount:", `${member.guild.memberCount} members!`)
    .setTimestamp()
    .setThumbnail(`<${member.user.avatarURL}>`);
  WCHANNEL.sendEmbed(byeembed);
  return;
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.includes("<@753187179781423145>"))
    return message.reply(
      "My prefix `!`, If you need help write `!Help` and if you need help from the staff write`!Helpme`"
    );
});

const Enmap = require("enmap");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.TOKEN);
