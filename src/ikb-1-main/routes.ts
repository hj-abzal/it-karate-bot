import {Express, Request, Response} from 'express';
import auth from '../ikb-2-features/f-1-auth';
import lessons from '../ikb-2-features/f-2-lessons';
import send from '../ikb-2-features/f-3-message';

export const routes = (app: Express) => {
    app.use("/auth", auth);
    app.use("/lessons", lessons);
    app.use("/send", send);

    // ping endpoint
    app.use("/ping", (req: Request, res: Response) => {
        // save statistic
        const backTime = new Date().getTime();
        const frontTime = +req.body.frontTime || (req.query.frontTime && +req.query.frontTime) || (backTime + 1);
        const ping = backTime - frontTime;
        console.warn("!!! PING: ", ping); // need log always

        res.status(200).json({
            ping,
            backTime,
            frontTime: frontTime > backTime ? "---" : frontTime,
            info: "please send me you time",
        });
    });

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