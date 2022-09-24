import {Express, Request, Response} from 'express';
import {VERSION_1_0} from './config';
import products from '../cnb-2-features/products';

export const routes = (app: Express) => {
    app.use(VERSION_1_0 + "/products", products);

    // default
    app.use((req: Request, res: Response) => {
        console.log("bad url: ", req.method, req.url);
        res.status(404).json({
            error: "bad url",
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body,
        });
    });
};
