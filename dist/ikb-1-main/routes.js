"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const f_1_auth_1 = __importDefault(require("../ikb-2-features/f-1-auth"));
const f_2_lessons_1 = __importDefault(require("../ikb-2-features/f-2-lessons"));
const f_3_message_1 = __importDefault(require("../ikb-2-features/f-3-message"));
const routes = (app) => {
    app.use("/auth", f_1_auth_1.default);
    app.use("/lessons", f_2_lessons_1.default);
    app.use("/send", f_3_message_1.default);
    // ping endpoint
    app.use("/ping", (req, res) => {
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
    app.use((req, res) => {
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
exports.routes = routes;
//# sourceMappingURL=routes.js.map