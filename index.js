// import config 
const config = require('./config/main')

// node modules used
const { Telegraf } = require('telegraf')

// init telegraf
const bot = new Telegraf(
    config.telegram.botToken, 
    { 
        username: config.telegram.botName
    }
)

// commands and behavior of the bot are set here
bot.command('start', ctx => {
    return ctx.reply('Hi, I am a bot. ') 
})

bot.hears('hi', ctx => { 
    return ctx.reply('Hi, ' + ctx.from.first_name + '.') 
})

bot.startPolling()