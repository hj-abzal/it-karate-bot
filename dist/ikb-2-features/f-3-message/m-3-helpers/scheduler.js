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
exports.Scheduler = void 0;
const sendMessage_1 = require("./sendMessage");
const scheduledMessage_1 = __importDefault(require("../m-2-models/scheduledMessage"));
const addZeroIfNeeded_1 = require("./addZeroIfNeeded");
class Scheduler {
    constructor() {
        this.scheduledMessages = [];
        this.setScheduledMessages();
    }
    setScheduledMessages() {
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            const scheduledMessages = yield scheduledMessage_1.default.find().exec();
            if (scheduledMessages) {
                this.scheduledMessages = scheduledMessages;
            }
        }));
    }
    start() {
        console.log('createScheduler started!');
        setInterval(() => {
            this.scheduledMessages.map((s) => __awaiter(this, void 0, void 0, function* () {
                if (s.time === this.time()) {
                    this.sendMessages(s.usersIDs, s.message);
                    if (!s.isRepeated) {
                        yield scheduledMessage_1.default.findByIdAndDelete(s._id);
                        this.scheduledMessages.filter((el) => el._id !== s._id);
                    }
                }
            }));
            // console.log(this.time());
        }, 1000);
    }
    ;
    sendMessages(userIDs, message) {
        userIDs.map((id) => __awaiter(this, void 0, void 0, function* () {
            yield (0, sendMessage_1.sendMessage)(id, message);
        }));
    }
    time() {
        const minutes = (0, addZeroIfNeeded_1.addZeroIfNeeded)(new Date().getMinutes());
        const hours = (0, addZeroIfNeeded_1.addZeroIfNeeded)(new Date().getHours());
        const seconds = (0, addZeroIfNeeded_1.addZeroIfNeeded)(new Date().getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }
    ;
}
exports.Scheduler = Scheduler;
//# sourceMappingURL=scheduler.js.map