import {greetingToStudent} from '../a-3-helpers/greetingToStudent';
import {adminLogin} from '../../../ikb-1-main/config';
import TelegramBot from 'node-telegram-bot-api';
import {configType} from '../../../ikb-1-main/botController';
import {IUser} from '../a-2-models/user';

export const startCommandHandler = async (
    bot: TelegramBot,
    config: configType,
    user: IUser | null
) => {
    const {studentID, chatID, username} = config;
    if (user) {
        return bot.sendMessage(chatID, greetingToStudent(user.first_name))
    } else {
        await bot.sendMessage(chatID, `Cообщите админу ${adminLogin} ваш ID и логин:`)
        await bot.sendMessage(chatID, studentID.toString())
        return bot.sendMessage(chatID, username)
    }
};