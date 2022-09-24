import {Express, NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const appUse = (app: Express) => {

    // parse application/json
    app.use(bodyParser.json({limit: "7mb"}));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({limit: "7mb", extended: false}));

    // log middleware
    app.use((req: Request, res: Response, next: NextFunction) => {
        console.log("Time: ", new Date().toString());
        console.log("-----", req.method, req.url, "params:",  req.params);
        console.log("query:", req.query);
        console.log("body:", req.body);
        next();
    });

    // const whitelist = ['http://localhost:4200', 'http://195.49.212.94:7542/'];
    const corsOptions = {
        credentials: true,
        origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
            console.log("origin: ", origin);
            // if(whitelist.includes(origin || ""))
            //     return callback(null, true)
            //
            // callback(new Error('Not allowed by CORS'));
            callback(null, true) //everyone is allowed
        }
    };
    app.use(cors(corsOptions));
};
