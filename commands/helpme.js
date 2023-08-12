const errors = require("error.js");
const Discord = require("discord.js");

exports.run = async (client, message, args, guild) => {
  let Rreason = args.join(" ");

  let voice =
    message.member.voiceChannel ||
    ":no_entry: המשתמש אינו נמצא בחדר :no_entry:";
  message.channel.send(
    `<@&973996744465604613> | , ${message.author
    } **needs your help!** \n **__User status__: ${voice} **  \n :question:**Reason: ${Rreason || "no reason"
    }**`
  );
};
module.exports.help = {
  name: "helpme",
};
