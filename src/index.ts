import dotenv from 'dotenv';
import TelegramBot, {Message} from 'node-telegram-bot-api';
import mongoose from 'mongoose';
import {checkIsAdmin} from './auth/helpers/checkIsAdmin';

dotenv.config();


const bot = new TelegramBot(process.env.TOKEN as string, {polling: true});
const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'Вернет ваш id'},
        {command: '/get_lessons', description: 'Получить открытые уроки'},
    ]).then();

    bot.on('message', async (msg: Message) => {
        console.log(msg);

        const command = msg.text;
        const chatId = msg.chat.id;
        const studentID = msg.from!.id;

        if (command === '/start') {
            await bot.sendMessage(chatId, `Cообщите админу ваш ID:`);
            return bot.sendMessage(chatId, studentID.toString());
        }

        if (command === '/admin' && checkIsAdmin(studentID)) {
            const text = `admin scripts: 
            /addStudent /deleteStudent 
            /editStudent /deleteStudent
            `
            return bot.sendMessage(chatId, text);
        }
        if (command === '/addStudent') {
            return await bot.sendMessage(chatId, 'Введите ID:', {
                reply_markup: {
                    remove_keyboard: true
                }
            })

        }

        return  bot.sendMessage(chatId, 'Не понятный запрос. Попробуйте через меню!')

    });
};

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => {
        console.log('MongoDB connected successfully');
        start();
    })
    .catch(e => console.log('MongoDB connection error: ', {...e}));


