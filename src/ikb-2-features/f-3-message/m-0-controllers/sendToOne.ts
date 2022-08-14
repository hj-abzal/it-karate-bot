import {Request, Response} from 'express';
import User, {IUser} from '../../f-1-auth/a-2-models/user';
import {sendMessage} from '../m-3-helpers/sendMessage';

export const sendToOne = async (req: Request, res: Response) => {
    const {
        message,
        _id,
    } = req.body;

    try {
        const user: IUser | null = await User.findById({_id}).exec();
        if (!user)
            res.status(400).json({
                error: "No such user!",
                in: "sendToOne/User.findById",
            });
       else  {
           if (user.chatID) {
               await sendMessage(user.chatID, message)
               res.status(200).json({message, user});
           } else {
               res.status(400).json({
                   error: "Chat id is not registered!",
                   in: "sendToOne/User.findById",
               });
           }
        }
    } catch (e: any) {
        res.status(500).json({
            error: "some error: " + e.message,
            info: "Back doesn't know what the error is...",
            in: "sendToOne/User.findById",
        });
    }
};
