import {Request, Response} from 'express';
import ScheduledMessage from '../m-2-models/scheduledMessage';
import {scheduler} from '../../../index';

export const deleteScheduler = async (req: Request, res: Response) => {
    const {_id} = req.query

    try {
        const message =await ScheduledMessage.findOneAndDelete({_id}).exec();
        scheduler.setScheduledMessages();
        res.status(200).json({deleted: message});
    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "deleteScheduler"
        });
    }
};
