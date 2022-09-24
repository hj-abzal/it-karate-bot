import {Request, Response} from 'express';
import Product from '../models/product';

export const deleteProduct = async (req: Request, res: Response) => {
    const {ids} = req.body
    try {
        ids.map(async (id: string) => {
            await Product.findByIdAndDelete(id).exec();
        })
        res.status(200).json({deletedIDs: ids});
    } catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "deleteProduct"
        });
    }
};
