const express = require('express');
const BotController = require('../controllers/botController');

const router = express.Router();
const botController = new BotController();

function setRoutes(app) {
    router.get('/start', botController.handleStart.bind(botController));
    router.post('/message', botController.handleMessage.bind(botController));
    
    app.use('/api', router);
}

module.exports = setRoutes;