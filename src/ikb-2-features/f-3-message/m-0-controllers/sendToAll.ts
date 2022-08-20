import {Request, Response} from 'express';
import User, {IUser} from '../../f-1-auth/a-2-models/user';
import {sendMessage} from '../m-3-helpers/sendMessage';

export const sendToAll = async (req: Request, res: Response) => {
    const {
        message,
    } = req.body;
    const informed: string[] = [];
    try {
        const users: IUser[] | null = await User.find().exec();
        if (!users)
            res.status(400).json({
                error: 'No users found',
                in: 'sendToAll/User.sendToAll',
            });
        else {
            users.map( async (u) => {
                informed.push(u.first_name)
                await sendMessage(u.uuid, message);
            })
            res.status(200).json({message, informed});
        }
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'sendToAll/User.find',
        });
    }
};
