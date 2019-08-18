const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("**Help Command**")
    .setColor('#ff0000')
    .addField(" /ban @пользователь ")
    .addField(" /clear число")
    .addField(" /kick @полозователь")
    .addField(" /mute @полозователь число(пример 200)")
    .addField(" /unmute @пользователь")
    .addField(" /serverinfo")
    .addField(" /userinfo")
    .addField(" /warn @пользователь ")
    .addField(" /unwarn @пользователь ")

    bot.send(embed);

};
module.exports.help = {
    name: "help"
};