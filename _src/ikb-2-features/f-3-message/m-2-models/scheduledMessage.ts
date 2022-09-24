import mongoose, {Document, Schema} from 'mongoose';

export interface IScheduledMessage extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    time: string;
    message: string;
    isRepeated: boolean;
    usersIDs: number[];
}

const ScheduledMessageSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true
        },
        isRepeated: {
            type: Boolean,
            required: true
        },
        usersIDs: {
            type: [String],
            required: true
        },
    },
);

export default mongoose.model<IScheduledMessage>('scheduleMessages', ScheduledMessageSchema);
