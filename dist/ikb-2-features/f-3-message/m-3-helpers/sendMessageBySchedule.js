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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
const index_1 = require("../../../index");
class Scheduler {
    constructor() {
        this.subscribers = [
            {
                time: '2:55:45',
                usersIDs: [1071927152],
                message: 'Dont worry'
            },
            {
                time: '2:56:0',
                usersIDs: [1071927152],
                message: 'Dont worry i said'
            }
        ];
    }
    start() {
        setInterval(() => {
            if (this.subscribers.length) {
                this.subscribers.map(s => {
                    if (s.time === time()) {
                        s.usersIDs.map((id) => __awaiter(this, void 0, void 0, function* () {
                            yield index_1.bot.sendMessage(id, s.message);
                        }));
                    }
                });
            }
            console.log(time());
        }, 1000);
    }
}
exports.Scheduler = Scheduler;
const time = () => {
    const minutes = addZeroIfNeeded(new Date().getMinutes());
    const hours = addZeroIfNeeded(new Date().getHours());
    const seconds = addZeroIfNeeded(new Date().getSeconds());
    return `${hours}:${minutes}:${seconds}`;
};
const addZeroIfNeeded = (n) => {
    if (n.toString().length === 1) {
        return `0${n}`;
    }
    return n;
};
//# sourceMappingURL=sendMessageBySchedule.js.map