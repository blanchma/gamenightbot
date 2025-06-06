require('dotenv').config();

class TelegramBot {
    constructor() {
        this.TelegramBot = require('node-telegram-bot-api');
        this.bot = new this.TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
        this.initialize();
    }

    initialize() {
        this.bot.onText(/\/start/, (msg) => this.onMessage(msg));
        this.bot.on('message', (msg) => this.onMessage(msg));
    }

    onMessage(msg) {
        const chatId = msg.chat.id;
        const response = 'Hello! I am your Telegram bot. How can I assist you today?';
        this.bot.sendMessage(chatId, response);
    }

    startBot() {
        console.log('Telegram Bot is running...');
    }
}

module.exports = TelegramBot;