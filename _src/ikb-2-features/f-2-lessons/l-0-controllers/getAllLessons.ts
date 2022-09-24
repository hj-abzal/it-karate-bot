import {Request, Response} from 'express';
import Lessons from '../l-2-models/lessons';

export const getAllLessons = async (req: Request, res: Response) => {
    try {
        const lessons = await Lessons.find()
            .exec();
        res.status(200)
            .json({lessons});

    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getAllLessons/lessons.find',
        });
    }
};
