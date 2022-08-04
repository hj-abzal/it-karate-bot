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

dotenv.config();

const app = express();
appUse(app);
routes(app);

const server = http.createServer(app);

const startBot = () => {
    const bot = new TelegramBot(TelegramToken, {polling: true});

    botCommands(bot);
    botController(bot);
};

mongoose.connect(MongoDBUris)
    .then(() => {
        console.log('MongoDB connected successfully');

        server.listen(PORT, async () => {
            console.log('listening on port: ' + PORT);
            startBot();
        });
    })
    .catch(e => console.log('MongoDB connection error: ', {...e}));


