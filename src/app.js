const express = require('express');
const bodyParser = require('body-parser');
const { TelegramBot } = require('./bot/telegramBot');
const { setRoutes } = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setRoutes(app);

const telegramBot = new TelegramBot();
telegramBot.startBot();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});