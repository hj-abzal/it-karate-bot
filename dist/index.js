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
const checkIsAdmin_1 = require("./auth/helpers/checkIsAdmin");
dotenv_1.default.config();
const bot = new node_telegram_bot_api_1.default(process.env.TOKEN, { polling: true });
const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Вернет ваш id' },
        { command: '/get_lessons', description: 'Получить открытые уроки' },
    ]).then();
    bot.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(msg);
        const command = msg.text;
        const chatId = msg.chat.id;
        const studentID = msg.from.id;
        if (command === '/start') {
            yield bot.sendMessage(chatId, `Cообщите админу ваш ID:`);
            return bot.sendMessage(chatId, studentID.toString());
        }
        if (command === '/admin' && (0, checkIsAdmin_1.checkIsAdmin)(studentID)) {
            const text = `admin scripts: 
            /addStudent /deleteStudent 
            /editStudent /deleteStudent
            `;
            return bot.sendMessage(chatId, text);
        }
        if (command === '/addStudent') {
            return yield bot.sendMessage(chatId, 'Введите ID:', {
                reply_markup: {
                    remove_keyboard: true
                }
            });
        }
        return bot.sendMessage(chatId, 'Не понятный запрос. Попробуйте через меню!');
    }));
};
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => {
    console.log('MongoDB connected successfully');
    start();
})
    .catch(e => console.log('MongoDB connection error: ', Object.assign({}, e)));
//# sourceMappingURL=index.js.map