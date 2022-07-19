import mongoose, {Document, Schema} from 'mongoose';

export interface IStudent extends Document {
    _id: mongoose.Types.ObjectId;
    username: string;
    first_name: string;
    last_name: string;
    isAdmin: boolean;
    telegram_id: number;
}

const StudentSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true
        },
        telegram_id: {
            type: Number,
            required: true
        },
    },
);

export default mongoose.model<IStudent>('student', StudentSchema);
