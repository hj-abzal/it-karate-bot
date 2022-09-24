import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import mongoose from 'mongoose';
import express from 'express';
import http from 'http';
import {MongoDBUris, PORT, TelegramToken} from './ikb-1-main/config';
import {appUse} from './ikb-1-main/app';
import {routes} from './ikb-1-main/routes';
import {botController} from './ikb-1-main/botController';
import {botCommands} from './ikb-1-main/botCommands';
import {Scheduler} from './ikb-2-features/f-3-message/m-3-helpers/scheduler';

dotenv.config();

export const bot = new TelegramBot(TelegramToken, {polling: true});
export const scheduler = new Scheduler();

const startBot = () => {
    const app = express();

    appUse(app);
    routes(app);

    const server = http.createServer(app);

    botCommands(bot);
    botController(bot);
    scheduler.start();

    mongoose.connect(MongoDBUris)
        .then(() => {
            console.log('MongoDB connected successfully');

            server.listen(PORT, async () => {
                console.log('listening on port: ' + PORT);
            });
        })
        .catch(e => console.log('MongoDB connection error: ', {...e}));
};

startBot();

