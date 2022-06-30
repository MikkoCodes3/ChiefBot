const Discord = require('discord.js')
require("dotenv").config()
const TOKEN = 'OTkxMTk2NzQ5NjUxNzcxNTA0.GjJymT.-XXyPaZ8WcO9oz62Q0vTBboAXl-pbt5uvMHdhU'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply('Hello there!')
    }
})

client.login(process.env.TOKEN)