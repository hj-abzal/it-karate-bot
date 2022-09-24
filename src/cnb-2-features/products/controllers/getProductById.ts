import {Request, Response} from 'express';
import Product, {IProduct} from '../models/product';

export const getProductById = async (req: Request, res: Response) => {
    const {
        id,
    } = req.query;

    try {
        const product: IProduct | null = await Product.findById({_id: id})
            .exec();
        if (product) {
            res.status(200)
                .json(product);
        } else {
            res.status(500).json({
                info: 'Product not found!',
                in: 'getProductById/Lessons.findById',
            });
        }

    } catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            errorObject: {...e},
            in: 'getProductById/Lessons.findById',
        });
    }
};
