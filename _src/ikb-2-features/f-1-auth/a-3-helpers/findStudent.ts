import User, {IUser} from '../a-2-models/user';

export const findStudent = async (uuid: number): Promise<IUser | null> => {
    return await User.findOne({uuid}).exec();
}