import {Request, Response} from 'express';
import User from '../../f-1-auth/a-2-models/user';
import {sendMessage} from '../m-3-helpers/sendMessage';

export const sendMessageBulk = async (req: Request, res: Response) => {
    const {
        message,
        uuids,
    } = req.body;

    try {

        if (!uuids && !message) {
            res.status(400).json({
                error: 'Required fields message, uuids',
                body: req.body,
                in: 'sendMessageBulk/User.findById',
            });
        }

        const informed: string[] = [];

        uuids.map(async (u: number) => {
            const user: any = await User.find({uuid: u}).exec();
            if (!user) {
                res.status(400).json({
                    error: 'No such user!',
                    userID: u,
                    in: 'sendMessageBulk/User.findById',
                });
            }
            informed.push(user.first_name)
            await sendMessage(u, message);
        });
        res.status(200).json({message, informed: uuids});
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'sendMessageBulk/User.findById',
        });
    }
};
