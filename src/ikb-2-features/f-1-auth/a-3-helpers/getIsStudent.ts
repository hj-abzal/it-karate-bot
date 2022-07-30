import User, {IUser} from '../a-2-models/user';

export const getIsStudent = async (uuid: number): Promise<IUser | null> => {
    return await User.findOne({uuid}).exec();
}