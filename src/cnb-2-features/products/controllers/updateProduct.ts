import {Request, Response} from 'express';
import Product from '../models/product';

export const updateProduct = async (req: Request, res: Response) => {
    const { _id, ...product} = req.body;

    try {
        await Product.findByIdAndUpdate(
            _id,
            {...product},
            {new: true}
        ).exec();
        res.status(200).json({product});

    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "updateProduct"
        });
    }
};
