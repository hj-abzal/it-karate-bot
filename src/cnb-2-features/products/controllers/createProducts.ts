import {Request, Response} from 'express';
import Product, {IProduct} from '../models/product';

export const createProducts = async (req: Request, res: Response) => {
    const {
        title,
        description,
        images,
        isActive,
        isSinglePrice,
        price,
        priceByCity,
    } = req.body;
    if (!title || !description || !images.length) {
        return res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice',
            body: req.body,
            in: 'createProducts',
        });

    }

    if (isSinglePrice && !price) {
        return res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice, price',
            body: req.body,
            in: 'createProducts',
        });
    }

    if (!isSinglePrice && !priceByCity.keys.length) {
        return res.status(400).json({
            error: 'required field are title, description, images, isActive, isSinglePrice, priceByCity',
            body: req.body,
            in: 'createProducts',
        });
    }

    try {
        const product: IProduct = await Product.create(
            {
                title,
                description,
                images,
                isActive,
                isSinglePrice,
                price,
                priceByCity,
            }
        );
        return res.status(201).json({product});
    } catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'createProducts/Products.create',
        });
    }
};
