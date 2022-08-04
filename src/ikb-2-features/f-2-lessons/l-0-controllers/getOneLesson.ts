import {Request, Response} from 'express';
import Lessons from '../l-2-models/lessons';

export const getOneLesson = async (req: Request, res: Response) => {
    const {
        lessonOrder,
    } = req.query;

    try {
        const lesson = await Lessons.find({lessonOrder})
            .exec();
        if (lesson.length) {
            res.status(200)
                .json(lesson[0]);
        }

    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getOneLesson/lessons.find',
        });
    }
};
