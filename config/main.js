var config = {};

/**
 * Telegram related configurations
 */
config.telegram = {};
config.telegram.botToken = process.env.BOT_TOKEN;
config.telegram.botName = process.env.BOT_NAME;

module.exports = config;