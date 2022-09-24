import TelegramBot from 'node-telegram-bot-api';
import {configType} from '../../../ikb-1-main/botController';
import {IUser} from '../../f-1-auth/a-2-models/user';
import {optionsCreator} from '../l-3-helpers/makeButtons';

export const getLessonsCommandHandler = async (
    bot: TelegramBot,
    config: configType,
    user: IUser
) => {
    const {chatID} = config;
    const {level} = user;

    //@ts-ignore
    return bot.sendMessage(chatID, 'Выберите урок:', optionsCreator(level));
};



