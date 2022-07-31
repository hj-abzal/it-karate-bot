import {Request, Response} from 'express';
import User from '../a-2-models/user';

export const updateUser = async (req: Request, res: Response) => {
    const { _id, ...user} = req.body;

    try {
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
