"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const { message } = require('telegraf/filters');
class MarshalTelebot {
    constructor(token) {
        const botToken = token || process.env.TELEGRAM_BOT_TOKEN;
        if (!botToken) {
            throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables.');
        }
        this.bot = new telegraf_1.Telegraf(botToken);
        this.initialize();
    }
    initialize() {
        this.bot.start((ctx) => this.onStart(ctx));
        this.bot.on('text', (ctx) => this.onMessage(ctx));
        this.bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
    }
    onStart(ctx) {
        ctx.reply('Hello! I am your Telegram bot. How can I assist you today, Tute?');
    }
    onMessage(ctx) {
        console.log(JSON.stringify(ctx));
    }
    startBot() {
        this.bot.launch();
        console.log('Telegram Bot is running...');
    }
}
exports.default = MarshalTelebot;
