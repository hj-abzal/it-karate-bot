import {Request, Response} from 'express';
import User from '../a-2-models/user';
import Lesson from '../../f-2-lessons/l-2-models/lessons';

export const updateUser = async (req: Request, res: Response) => {
    const { _id, ...user} = req.body;

    try {
        if (user?.lessonOrder) {
            const lesson = await Lesson.findOne({lessonOrder: user.lessonOrder})
            if (!lesson) {
                res.status(404).json({
                    error: "There is no such lesson in DB",
                    body: req.body,
                    in: "Lesson.findOne"
                });
            }
        }
        await User.findByIdAndUpdate(
            _id,
            {...user},
            {new: true}
        ).exec();
        res.status(200).json({user});

    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "updatedUser"
        });
    }
};
