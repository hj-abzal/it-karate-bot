import TelegramBot from 'node-telegram-bot-api';

export const botCommands = (bot: TelegramBot) => {
    bot.setMyCommands([
        {command: '/start', description: 'Попробуйте :)'},
        {command: '/get_lessons', description: 'Получить открытые уроки'},
    ]).then();
}