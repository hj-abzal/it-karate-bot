import TelegramBot, {CallbackQuery, Message} from 'node-telegram-bot-api';
import {startCommandHandler} from '../ikb-2-features/f-1-auth/a-1-commandHandlers/startCommandHandler';
import {findStudent} from '../ikb-2-features/f-1-auth/a-3-helpers/findStudent';
import {getLessonsCommandHandler} from '../ikb-2-features/f-2-lessons/l-1-commandHandlers/getLessonsCommandHandler';
import Lesson, {ILesson} from '../ikb-2-features/f-2-lessons/l-2-models/lessons';
import {IUser} from '../ikb-2-features/f-1-auth/a-2-models/user';
import {createLessonsMessage} from '../ikb-2-features/f-2-lessons/l-3-helpers/createLessonsMessage';
import {updateChatId} from '../ikb-2-features/f-1-auth/a-3-helpers/updateChatId';

export const botController = (bot: TelegramBot) => {
    bot.on('message', async (msg: Message) => {
        const {command, ...config} = fieldGetters(msg);
        console.log(msg);
        const user: IUser | null = await findStudent(config.studentID);
        if (command === '/start') {
            return startCommandHandler(bot, config, user);
        }
        if (!user) {
            await bot.sendMessage(1071927152, `Tried my bot: @${config.username}`);
            console.log(`Tried my bot: @${config.username}`);
            return bot.sendMessage(config.chatID, 'Не авторизованный пользователь!');
        }

        await updateChatId(user, config.chatID, bot);

        switch (command) {
            case '/get_lessons':
                return getLessonsCommandHandler(bot, config, user);
            default:
                return bot.sendMessage(config.chatID, 'Не понятный запрос. Попробуйте через меню!');
        }
    });

    bot.on('callback_query', async (msg: CallbackQuery) => {
        try {
            const lessonOrder = msg.data;
            if (msg.message) {
                const chatId = msg.message.chat.id;
                const messageId = msg?.message.message_id;

                setTimeout(() => {
                    bot.deleteMessage(chatId, messageId.toString())
                }, 1000)

                const lesson: ILesson | null = await Lesson.findOne({lessonOrder})
                    .exec();
                const res = lesson
                    ? createLessonsMessage(lesson.homeWorkLink, lesson.todolistLink)
                    : 'Не могу найти такой урок!';
                await bot.sendMessage(chatId, res);
            }
        } catch (e: any) {
            console.log(e);
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

