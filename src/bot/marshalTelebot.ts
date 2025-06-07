import { Telegraf, Context } from 'telegraf';
const { message } = require('telegraf/filters')



class MarshalTelebot {
  private bot: Telegraf<Context>;

  constructor(token?: string) {
    const botToken = token || process.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      throw new Error(
        'TELEGRAM_BOT_TOKEN is not defined in environment variables.',
      );
    }
    this.bot = new Telegraf(botToken);
    this.initialize();
  }

  private initialize() {
    this.bot.start((ctx) => this.onStart(ctx));
    this.bot.on('text', (ctx) => this.onMessage(ctx));
    this.bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
  }

  private onStart(ctx: Context) {
    ctx.reply('Hello! I am your Telegram bot. How can I assist you today, Tute?');
  }

  private onMessage(ctx: Context) {
    console.log(JSON.stringify(ctx));
    ctx.reply(
      'I received your message. I am still learning, so please be patient with me.')
  }

  public startBot() {
    this.bot.launch();
    console.log('Telegram Bot is running...');
  }
}

export default MarshalTelebot;
