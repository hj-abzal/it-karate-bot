import {Request, Response} from 'express';
import Lesson, {ILesson} from '../l-2-models/lessons';

export const createLesson = async (req: Request, res: Response) => {
    const {
        lessonOrder,
        todolistLink,
        homeWorkLink,
    } = req.body;

    try {
        const oldLesson: ILesson | null = await Lesson.findOne({lessonOrder}).exec();

        if (oldLesson)
            res.status(400).json({error: "Lesson already exists ", oldLesson, in: "createLesson"});

        else {
            const lesson: ILesson = await Lesson.create(
                {
                    lessonOrder,
                    todolistLink,
                    homeWorkLink,
                }
            );
            res.status(201).json({lesson});
        }
    } catch (e: any) {
        res.status(500).json({
            error: "some error: " + e.message,
            info: "Back doesn't know what the error is...",
            in: "createLesson/Lesson.create",
        });
    }
};
