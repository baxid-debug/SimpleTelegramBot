// node modules used
const { Telegraf } = require('telegraf');

// set your bot token and bot name in Heroku's config vars
const bot = new Telegraf(process.env.BOT_TOKEN, { username: process.env.BOT_NAME });

// commands and behavior of the bot is set here
bot.command('start', ctx => { return ctx.reply('Hi, I am a bot. ') })
bot.hears('hi', ctx => { return ctx.reply('Hi, ' + ctx.from.first_name + '.') });

bot.startPolling();