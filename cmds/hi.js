const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('привет');

};
module.exports.help = {
    name: "hi"
};