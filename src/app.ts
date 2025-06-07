require('dotenv').config();

const MarshalTelebot = require('./bot/marshalTelebot').default;

const marshal = new MarshalTelebot();

marshal.startBot()
