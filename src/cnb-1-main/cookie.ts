import cors from 'cors';
import {Express} from 'express';

export const cookie = (app: Express) => {
    const corsOptions = {
        credentials: true,
        origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
            console.log("origin: ", origin);
            callback(null, true); // everyone is allowed
        }
    };

    app.use(cors(corsOptions));
};