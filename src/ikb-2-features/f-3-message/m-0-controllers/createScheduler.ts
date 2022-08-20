import {Request, Response} from 'express';
import ScheduleMessage, {IScheduledMessage} from '../m-2-models/scheduledMessage';
import {scheduler} from '../../../index';
import {addZeroIfNeeded} from '../m-3-helpers/addZeroIfNeeded';


export const createScheduler = async (req: Request, res: Response) => {
    const {
        title,
        time,
        message,
        usersIDs,
        isRepeated
    } = req.body;

    if (!title || !time || !message || !usersIDs) {
        res.status(400).json({
            error: 'required field are title, time, message, usersIDs',
            body: req.body,
            in: 'createScheduler',
        });
    }
    if (!usersIDs.length) {
        res.status(400).json({
            error: 'required field usersIDs should have ids',
            body: usersIDs,
            in: 'createScheduler',
        });
    }
    try {

        const scheduledMessage: IScheduledMessage = await ScheduleMessage.create(
            {
                title: checkIfProduction(title),
                time,
                message,
                isRepeated,
                usersIDs,
            }
        );
        scheduler.setScheduledMessages();
        res.status(201).json({scheduledMessage});
    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'createScheduler/ScheduleMessage.create',
        });
    }
};


const checkIfProduction = (title: string): string => {
    let res = title;
    if (process.env.NODE_ENV === 'production') {
        const [h, m, s] = title.split(':')
        const changeHours = Number(h) + 6
        res = `${addZeroIfNeeded(changeHours)}:${m}:${s}`
    }
    return res;
}