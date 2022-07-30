"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./ikb-1-main/config");
const startCommandHandler_1 = require("./ikb-2-features/f-1-auth/a-1-commandHandlers/startCommandHandler");
const app_1 = require("./ikb-1-main/app");
const routes_1 = require("./ikb-1-main/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, app_1.appUse)(app);
(0, routes_1.routes)(app);
const server = http_1.default.createServer(app);
const startBot = () => {
    const bot = new node_telegram_bot_api_1.default(config_1.TelegramToken, { polling: true });
    bot.setMyCommands([
        { command: '/click_me', description: 'Попробуйте :)' },
        { command: '/get_lessons', description: 'Получить открытые уроки' },
    ]).then();
    bot.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(msg);
        const command = msg.text;
        const chatID = msg.chat.id;
        const studentID = msg.from.id;
        const username = msg.from.username;
        const config = { chatID, studentID, username };
        switch (command) {
            case '/start':
                return (0, startCommandHandler_1.startCommandHandler)(bot, config);
            default:
                return bot.sendMessage(chatID, 'Не понятный запрос. Попробуйте через меню!');
        }
    }));
};
mongoose_1.default.connect(config_1.MongoDBUris)
    .then(() => {
    console.log('MongoDB connected successfully');
    const port = process.env.PORT || config_1.PORT;
    server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('listening on port: ' + port);
    }));
    startBot();
})
    .catch(e => console.log('MongoDB connection error: ', Object.assign({}, e)));
//# sourceMappingURL=index.js.map