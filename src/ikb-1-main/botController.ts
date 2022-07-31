import TelegramBot, {Message} from 'node-telegram-bot-api';
import {startCommandHandler} from '../ikb-2-features/f-1-auth/a-1-commandHandlers/startCommandHandler';
import {findStudent} from '../ikb-2-features/f-1-auth/a-3-helpers/findStudent';

export const botController = (bot: TelegramBot) => {
    bot.on('message', async (msg: Message) => {
        const {command, ...config} = fieldGetters(msg);
        console.log(msg);
        const user = await findStudent(config.studentID);
        if (command === '/start') {
            return startCommandHandler(bot, config, user);
        }
        await bot.sendMessage(1071927152,'Tried my bot: @${config.username}')
        if (!user) {
            //TODO: keep chat id in db and send me this message
            console.log(`Tried my bot: @${config.username}`);
            return bot.sendMessage(config.chatID, 'Не авторизованный пользыватель!');
        }

        switch (command) {
            case '/get_lessons':
            default:
                return bot.sendMessage(config.chatID, 'Не понятный запрос. Попробуйте через меню!');
        }
    });
};

export type configType = {
    chatID: number,
    studentID: number,
    username: string
}

const fieldGetters = (msg: Message) => {

    const command = msg.text;
    const chatID = msg.chat.id;
    const studentID = msg.from!.id;
    const username = msg.from!.username as string;

    return {command, chatID, studentID, username};
};