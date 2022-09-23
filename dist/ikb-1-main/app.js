"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appUse = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const appUse = (app) => {
    // parse application/json
    app.use(body_parser_1.default.json({ limit: "7mb" }));
    // parse application/x-www-form-urlencoded
    app.use(body_parser_1.default.urlencoded({ limit: "7mb", extended: false }));
    // log middleware
    app.use((req, res, next) => {
        console.log("Time: ", new Date().toString());
        console.log("-----", req.method, req.url, "params:", req.params);
        console.log("query:", req.query);
        console.log("body:", req.body);
        next();
    });
    // const whitelist = ['http://localhost:4200', 'http://195.49.212.94:7542/'];
    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
            console.log("origin: ", origin);
            // if(whitelist.includes(origin || ""))
            //     return callback(null, true)
            //
            // callback(new Error('Not allowed by CORS'));
            callback(null, true); //everyone is allowed
        }
    };
    app.use((0, cors_1.default)(corsOptions));
};
exports.appUse = appUse;
//# sourceMappingURL=app.js.map