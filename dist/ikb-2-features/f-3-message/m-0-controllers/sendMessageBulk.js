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
exports.sendMessageBulk = void 0;
const user_1 = __importDefault(require("../../f-1-auth/a-2-models/user"));
const sendMessage_1 = require("../m-3-helpers/sendMessage");
const sendMessageBulk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, uuids, } = req.body;
    try {
        if (!uuids && !message) {
            res.status(400).json({
                error: 'Required fields message, uuids',
                body: req.body,
                in: 'sendMessageBulk/User.findById',
            });
        }
        const informed = [];
        uuids.map((u) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield user_1.default.find({ uuid: u }).exec();
            if (!user) {
                res.status(400).json({
                    error: 'No such user!',
                    userID: u,
                    in: 'sendMessageBulk/User.findById',
                });
            }
            informed.push(user.first_name);
            yield (0, sendMessage_1.sendMessage)(u, message);
        }));
        res.status(200).json({ message, informed: uuids });
    }
    catch (e) {
        res.status(500).json({
            error: 'some error: ' + e.message,
            info: 'Back doesn\'t know what the error is...',
            in: 'sendMessageBulk/User.findById',
        });
    }
});
exports.sendMessageBulk = sendMessageBulk;
//# sourceMappingURL=sendMessageBulk.js.map