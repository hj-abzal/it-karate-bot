import {Request, Response} from 'express';
import User from '../a-2-models/user';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find()
            .exec();
        res.status(200)
            .json({users});

    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getAllUsers/User.find',
        });
    }
};
