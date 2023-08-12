const Discord = require("discord.js");
let cdseconds = 5;
const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { Attachment } = require("discord.js");
const { get } = require("snekfetch");
const superagent = require('superagent');

exports.run = async (bot, message, args) => {

  let member;
  if (message.mentions.users.first()) {
    member = message.mentions.users.first() || message.guild.users.get(args[0]) || message.guild.users.find("name", args[0]);

  } else {
    member = message.author;
  }

  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    let { body: background } = await superagent('https://image.shutterstock.com/z/stock-photo-rip-on-grave-funeral-background-392885260.jpg');
    let { body: avatar } = await superagent(member.avatarURL.replace(imageUrlRegex, "?size=512"));
    return new Canvas(240, 290)

      .addImage(background, 0, 0, 240, 290)

      .setColor("00001")
      .setTextFont("20px Comic Sans MS")
      .setTextAlign("center")
      .addText(`${member.username}`, 110, 20)
      //תשלח פרנד

      .addRoundImage(avatar, 65, 140, 100, 100, 50, 30, 30)

      .toBufferAsync()
  }

  let met = new Discord.Attachment(await createCanvas(), "met.jpg")
  await message.channel.send(met)

}