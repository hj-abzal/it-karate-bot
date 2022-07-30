import {getIsStudent} from '../a-3-helpers/getIsStudent';
import {greetingToStudent} from '../a-3-helpers/greetingToStudent';
import {adminLogin} from '../../../ikb-1-main/config';

export const startCommandHandler = async (bot: any, config: any) => {
    const {studentID, chatID, username} = config;
    const user = await getIsStudent(studentID);
    if (user) {
        return bot.sendMessage(chatID, greetingToStudent(user.first_name))
    } else {
        await bot.sendMessage(chatID, `Cообщите админу ${adminLogin} ваш ID и логин:`)
        await bot.sendMessage(chatID, studentID.toString())
        return bot.sendMessage(chatID, username)
    }
};