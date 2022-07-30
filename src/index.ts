import dotenv from 'dotenv';
import TelegramBot, {Message} from 'node-telegram-bot-api';
import mongoose from 'mongoose';
import express from 'express';
import http from 'http';
import {MongoDBUris, PORT, TelegramToken} from './ikb-1-main/config';
import {startCommandHandler} from './ikb-2-features/f-1-auth/a-1-commandHandlers/startCommandHandler';
import {appUse} from './ikb-1-main/app';
import {routes} from './ikb-1-main/routes';

dotenv.config();

const app = express();
appUse(app)
routes(app)

const server = http.createServer(app);
const startBot = () => {
        const bot = new TelegramBot(TelegramToken, {polling: true});
        bot.setMyCommands([
            {command: '/start', description: 'Попробуйте :)'},
            {command: '/get_lessons', description: 'Получить открытые уроки'},
        ]).then();
        bot.on('message', async (msg: Message) => {
            console.log(msg);
            //TODO getter of needed fields
            //TODO metric count of req
            const command = msg.text;
            const chatID = msg.chat.id;
            const studentID = msg.from!.id;
            const username = msg.from!.username;
            const config = {chatID, studentID, username}
            switch (command) {
                case '/start':
                    return startCommandHandler(bot, config)
                default:
                    return bot.sendMessage(chatID, 'Не понятный запрос. Попробуйте через меню!');
            }
        });
};

mongoose.connect(MongoDBUris)
    .then(() => {
        console.log('MongoDB connected successfully');

        const port = process.env.PORT || PORT;
        server.listen(port, async () => {
            console.log('listening on port: ' + port);
        });
        startBot();
    })
    .catch(e => console.log('MongoDB connection error: ', {...e}));


