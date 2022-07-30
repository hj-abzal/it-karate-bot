import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    uuid: number;
    isAdmin: boolean;
    first_name: string;
    last_name: string;
    username: string;
    range: string;
    level: number;
}

const UserSchema: Schema = new Schema(
    {
        uuid: {
            type: Number,
            required: true,
            uniq: true
        },
        isAdmin: {
            type: Boolean,
            required: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            uniq: true
        },
        range: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        },

    },
);

export default mongoose.model<IUser>('user', UserSchema);
