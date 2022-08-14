import User, {IUser} from '../a-2-models/user';
import TelegramBot from 'node-telegram-bot-api';
import {adminLogin} from '../../../ikb-1-main/config';

export const updateChatId = async (user: IUser, chatID: number, bot: TelegramBot) => {
    try {
       const res =  await User.findByIdAndUpdate(user._id, {
            chatID
        });
        console.log(res);
    } catch (e: any) {
        await bot.sendMessage(chatID, `Какая то ошибка, прошу сообщить админу: ${adminLogin}`)
        console.log('some error in updateChatId : ', e);
    }
}