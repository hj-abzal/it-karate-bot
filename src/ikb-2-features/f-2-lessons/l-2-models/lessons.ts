import mongoose, {Document, Schema} from 'mongoose';

export interface ILesson extends Document {
    _id: mongoose.Types.ObjectId;
    lessonOrder: number;
    todolistLink: string;
    homeWorkLink: string;
}

const LessonSchema: Schema = new Schema(
    {
        lessonOrder: {
            type: Number,
            required: true,
            uniq: true,
        },
        todolistLink: {
            type: String,
        },
        homeWorkLink: {
            type: String,
        },
    },
);

export default mongoose.model<ILesson>('lesson', LessonSchema);
