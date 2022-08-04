import {Request, Response} from 'express';
import Lessons, {ILesson} from '../l-2-models/lessons';

export const getOneLesson = async (req: Request, res: Response) => {
    const {
        lessonOrder,
    } = req.query;

    try {
        const lesson: ILesson | null = await Lessons.findOne({lessonOrder})
            .exec();
        if (lesson) {
            res.status(200)
                .json(lesson);
        } else {
            res.status(500).json({
                info: 'Back doesn\'t know what the error is...',
                in: 'getOneLesson/lessons.findOne',
            });
        }

    } catch (e: any) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getOneLesson/lessons.findOne',
        });
    }
};
