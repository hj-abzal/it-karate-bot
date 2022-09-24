import {bot} from '../../../index';

export const sendMessage = async (chatID: number, message: string) => {
    await bot.sendMessage(chatID, message)
}