import {Request, Response} from 'express';
import Lesson from '../l-2-models/lessons';

export const deleteLesson = async (req: Request, res: Response) => {
    const {lessonOrder} = req.query

    try {
        await Lesson.findOneAndDelete({lessonOrder}).exec();
        res.status(200).json({deleted: lessonOrder});
    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "deleteLesson"
        });
    }
};
