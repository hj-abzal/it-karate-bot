import {Request, Response} from 'express';
import ScheduledMessage from '../m-2-models/scheduledMessage';
import {scheduler} from '../../../index';

export const updateScheduler = async (req: Request, res: Response) => {
    const { _id, ...scheduledMessage} = req.body;
    if (!_id) {
        res.status(400).json({
            error: "Required field _id",
            _id: req.body,
            in: "updateScheduler"
        });
    }
    try {
        const updated = await ScheduledMessage.findByIdAndUpdate(
            _id,
            {...scheduledMessage},
            {new: true}
        ).exec();
        scheduler.setScheduledMessages();

        res.status(200).json({updated});

    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "updateScheduler"
        });
    }
};
