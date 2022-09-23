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
exports.updateUserLessonOrder = void 0;
const user_1 = __importDefault(require("../a-2-models/user"));
const lessons_1 = __importDefault(require("../../f-2-lessons/l-2-models/lessons"));
const sendMessage_1 = require("../../f-3-telegram-utils/sendMessage");
const updateUserLessonOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, lessonOrder } = req.body;
    try {
        if (lessonOrder) {
            const lesson = yield lessons_1.default.findOne({ lessonOrder: lessonOrder });
            if (!lesson) {
                res.status(404).json({
                    error: "There is no such lesson in DB",
                    body: req.body,
                    in: "Lesson.findOne"
                });
            }
        }
        const updatedUser = yield user_1.default.findByIdAndUpdate(_id, { lessonOrder }, { new: true }).exec();
        if (updatedUser && updatedUser.chatID) {
            yield (0, sendMessage_1.sendMessage)(updatedUser.chatID, `Привет самурай, тебе дали доступ на ${lessonOrder} урок!`);
        }
        res.status(200).json({ updatedUser });
    }
    catch (e) {
        res.status(500).json({
            error: "Back doesn't know what the error is",
            body: req.body,
            in: "updateUserLessonOrder"
        });
    }
});
exports.updateUserLessonOrder = updateUserLessonOrder;
//# sourceMappingURL=updateUserLessonOrder.js.map