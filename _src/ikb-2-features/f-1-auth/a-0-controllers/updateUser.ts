import {Request, Response} from 'express';
import User, {IUser} from '../a-2-models/user';
import Lesson from '../../f-2-lessons/l-2-models/lessons';
import {sendMessage} from '../../f-3-message/m-3-helpers/sendMessage';

export const updateUser = async (req: Request, res: Response) => {
    const {_id, ...user} = req.body;

    try {
        if (user?.level) {
            const lesson = await Lesson.findOne({lessonOrder: user.level});
            if (!lesson) {
                res.status(404).json({
                    error: 'There is no such lesson in DB',
                    body: req.body,
                    in: 'Lesson.findOne'
                });
                return;
            }
        }
        ;
        const updatedUser: IUser | null = await User.findByIdAndUpdate(
            _id,
            {...user},
            {new: true}
        ).exec();

        if (updatedUser) {
            await sendMessage(
                updatedUser.uuid,
                `Привет самурай, тебе дали доступ на ${user.level} урок!`
            );
            res.status(200).json({updatedUser});
        } else {
            res.status(500).json({
                error: 'not updated?',
                in: 'updatedUser'
            });
        }


    } catch (e) {
        res.status(500).json({
            error: 'Back doesn\'t know what the error is',
            body: req.body,
            in: 'updatedUser'
        });
    }
};
