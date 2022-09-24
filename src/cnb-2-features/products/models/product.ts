import mongoose, {Document, Schema} from 'mongoose';

type PriceByCity = {
    id: number, price: number
}

export interface IProduct extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    images: string[];
    isActive: boolean;
    isSinglePrice: boolean;
    price: number;
    priceByCity: PriceByCity;
}

const PriceByCitySchema = new Schema({
    id: Number,
    price: Number
});

const UserSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        isSinglePrice: {
            type: Boolean,
            required: true
        },
        price: {
            type: Number,
        },
        priceByCity: {
            type: PriceByCitySchema,
        }
    },
);

export default mongoose.model<IProduct>('product', UserSchema);
