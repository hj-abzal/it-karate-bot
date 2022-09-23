"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduler = exports.bot = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./ikb-1-main/config");
const app_1 = require("./ikb-1-main/app");
const routes_1 = require("./ikb-1-main/routes");
const botController_1 = require("./ikb-1-main/botController");
const botCommands_1 = require("./ikb-1-main/botCommands");
const scheduler_1 = require("./ikb-2-features/f-3-message/m-3-helpers/scheduler");
dotenv_1.default.config();
exports.bot = new node_telegram_bot_api_1.default(config_1.TelegramToken, { polling: true });
exports.scheduler = new scheduler_1.Scheduler();
const startBot = () => {
    const app = (0, express_1.default)();
    (0, app_1.appUse)(app);
    (0, routes_1.routes)(app);
    const server = http_1.default.createServer(app);
    (0, botCommands_1.botCommands)(exports.bot);
    (0, botController_1.botController)(exports.bot);
    exports.scheduler.start();
    mongoose_1.default.connect(config_1.MongoDBUris)
        .then(() => {
        console.log('MongoDB connected successfully');
        server.listen(config_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log('listening on port: ' + config_1.PORT);
        }));
    })
        .catch(e => console.log('MongoDB connection error: ', Object.assign({}, e)));
};
startBot();
//# sourceMappingURL=index.js.map