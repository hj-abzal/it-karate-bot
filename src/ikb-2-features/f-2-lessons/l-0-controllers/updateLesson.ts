import {Request, Response} from 'express';
import Lesson from '../l-2-models/lessons';

export const updateLesson = async (req: Request, res: Response) => {
    const { _id, ...lesson} = req.body;

    try {
        await Lesson.findByIdAndUpdate(
            _id,
            {...lesson},
            {new: true}
        ).exec();
        res.status(200).json({lesson});

    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "updateLesson"
        });
    }
};
