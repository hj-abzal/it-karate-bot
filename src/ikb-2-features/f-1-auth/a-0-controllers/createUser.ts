import {Request, Response} from 'express';
import User, {IUser} from '../a-2-models/user';

export const createUser = async (req: Request, res: Response) => {
    const {
        uuid,
        isAdmin,
        first_name,
        last_name,
        username,
    } = req.body;

        try {
            const oldUser: IUser | null = await User.findOne({uuid}).exec();

            if (oldUser)
                res.status(400).json({error: "User already exists ", uuid, in: "createUser"});

            else {
                const user: IUser = await User.create(
                    {
                        uuid,
                        isAdmin,
                        first_name,
                        last_name,
                        username,
                        range: 'white',
                        level: 1,
                    }
                );
                res.status(201).json({user});
            }
        } catch (e: any) {
            res.status(500).json({
                error: "some error: " + e.message,
                info: "Back doesn't know what the error is...",
                in: "createUser/User.create",
            });
        }
};
