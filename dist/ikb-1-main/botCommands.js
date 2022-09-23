"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botCommands = void 0;
const botCommands = (bot) => {
    bot.setMyCommands([
        { command: '/start', description: 'Попробуйте :)' },
        { command: '/get_lessons', description: 'Получить открытые уроки' },
    ]).then();
};
exports.botCommands = botCommands;
//# sourceMappingURL=botCommands.js.map