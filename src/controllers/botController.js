class BotController {
    handleStart(req, res) {
        const chatId = req.body.message.chat.id;
        const responseMessage = 'Welcome to the bot! How can I assist you today?';
        res.send({
            chat_id: chatId,
            text: responseMessage,
        });
    }

    handleMessage(req, res) {
        const chatId = req.body.message.chat.id;
        const userMessage = req.body.message.text;
        const responseMessage = `You said: ${userMessage}`;
        res.send({
            chat_id: chatId,
            text: responseMessage,
        });
    }
}

module.exports = BotController;