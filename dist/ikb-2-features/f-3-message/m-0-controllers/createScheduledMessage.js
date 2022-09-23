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
exports.createScheduledMessage = void 0;
const scheduleMessage_1 = __importDefault(require("../m-2-models/scheduleMessage"));
const createScheduledMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { time, message, usersIDs, } = req.body;
    if (!time || !message || !usersIDs) {
        res.status(400).json({
            error: 'required field are time, message, usersIDs',
            body: req.body,
            in: 'createScheduledMessage',
        });
    }
    if (!usersIDs.length) {
        res.status(400).json({
            error: 'required field usersIDs should have ids',
            body: usersIDs,
            in: 'createScheduledMessage',
        });
    }
    try {
        const scheduledMessage = yield scheduleMessage_1.default.create({
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
            in: 'createUser/User.create',
        });
    }
});
exports.createScheduledMessage = createScheduledMessage;
//# sourceMappingURL=createScheduledMessage.js.map