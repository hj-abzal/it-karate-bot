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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botController = void 0;
const startCommandHandler_1 = require("../ikb-2-features/f-1-auth/a-1-commandHandlers/startCommandHandler");
const findStudent_1 = require("../ikb-2-features/f-1-auth/a-3-helpers/findStudent");
const getLessonsCommandHandler_1 = require("../ikb-2-features/f-2-lessons/l-1-commandHandlers/getLessonsCommandHandler");
const lessons_1 = __importDefault(require("../ikb-2-features/f-2-lessons/l-2-models/lessons"));
const createLessonsMessage_1 = require("../ikb-2-features/f-2-lessons/l-3-helpers/createLessonsMessage");
const botController = (bot) => {
    bot.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        const _a = fieldGetters(msg), { command } = _a, config = __rest(_a, ["command"]);
        console.log(msg);
        const user = yield (0, findStudent_1.findStudent)(config.studentID);
        if (command === '/start') {
            return (0, startCommandHandler_1.startCommandHandler)(bot, config, user);
        }
        if (!user) {
            yield bot.sendMessage(1071927152, `Tried my bot: @${config.username}`);
            console.log(`Tried my bot: @${config.username}`);
            return bot.sendMessage(config.chatID, 'Не авторизованный пользователь!');
        }
        switch (command) {
            case '/get_lessons':
                return (0, getLessonsCommandHandler_1.getLessonsCommandHandler)(bot, config, user);
            default:
                return bot.sendMessage(config.chatID, 'Не понятный запрос. Попробуйте через меню!');
        }
    }));
    bot.on('callback_query', (msg) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const lessonOrder = msg.data;
            if (msg.message) {
                const chatId = msg.message.chat.id;
                const messageId = msg === null || msg === void 0 ? void 0 : msg.message.message_id;
                setTimeout(() => {
                    bot.deleteMessage(chatId, messageId.toString());
                }, 1000);
                const lesson = yield lessons_1.default.findOne({ lessonOrder })
                    .exec();
                const res = lesson
                    ? (0, createLessonsMessage_1.createLessonsMessage)(lesson.homeWorkLink, lesson.todolistLink)
                    : 'Не могу найти такой урок!';
                yield bot.sendMessage(chatId, res);
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
};
exports.botController = botController;
const fieldGetters = (msg) => {
    const command = msg.text;
    const chatID = msg.chat.id;
    const studentID = msg.from.id;
    const username = msg.from.username;
    return { command, chatID, studentID, username };
};
//# sourceMappingURL=botController.js.map