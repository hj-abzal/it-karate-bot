import {Request, Response} from 'express';
import ScheduledMessage from '../m-2-models/scheduledMessage';

export const getScheduler = async (req: Request, res: Response) => {
    try {
        const scheduledMessages = await ScheduledMessage.find()
            .exec();
        res.status(200)
            .json({scheduledMessages});

    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getScheduler/ScheduledMessage.find',
        });
    }
};
