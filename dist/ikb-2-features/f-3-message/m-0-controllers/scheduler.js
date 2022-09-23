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
exports.scheduler = void 0;
const scheduledMessage_1 = __importDefault(require("../m-2-models/scheduledMessage"));
const scheduler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { time, message, usersIDs, } = req.body;
    if (!time || !message || !usersIDs) {
        res.status(400).json({
            error: 'required field are time, message, usersIDs',
            body: req.body,
            in: 'scheduler',
        });
    }
    if (!usersIDs.length) {
        res.status(400).json({
            error: 'required field usersIDs should have ids',
            body: usersIDs,
            in: 'scheduler',
        });
    }
    try {
        const scheduledMessage = yield scheduledMessage_1.default.create({
            time,
            message,
            usersIDs,
        });
        res.status(201).json({ scheduledMessage });
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'createScheduler/ScheduleMessage.create',
        });
    }
});
exports.scheduler = scheduler;
//# sourceMappingURL=createScheduler.js.map