import {Request, Response} from 'express';
import User from '../a-2-models/user';

export const deleteUser = async (req: Request, res: Response) => {
    const {uuid} = req.query

    try {
        await User.findOneAndDelete({uuid}).exec();
        res.status(200).json({deleted: uuid});
    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "deleteUser"
        });
    }
};
